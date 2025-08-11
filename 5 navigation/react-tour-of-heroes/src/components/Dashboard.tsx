import React, { useEffect, useState } from "react";
import { Hero } from "../app/Hero";
import "./Dashboard.css";
import useHeroService from "../services/HeroService";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { getHeroes } = useHeroService();
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      const fetchedHeroes = await getHeroes();
      setHeroes(fetchedHeroes);
    };
    fetchHeroes();
  }, []);

  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.map((hero) => (
          <Link to={`/detail/${hero.id}`} key={hero.id}>
            {hero.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
