import React, { useEffect, useState } from "react";
import { Hero } from "../app/Hero";
import "./Heroes.css";
import useHeroService from "../services/HeroService";
import { useNavigate } from "react-router-dom";

const Heroes: React.FC = () => {
  const { getHeroes } = useHeroService();
  const navigate = useNavigate();
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const onSelect = (hero: Hero) => {
    navigate(`/detail/${hero.id}`);
  };

  useEffect(() => {
    const fetchHeroes = async () => {
      const fetchedHeroes = await getHeroes();
      setHeroes(fetchedHeroes);
    };
    fetchHeroes();
  }, []);

  return (
    <div>
      <h2>My Heroes</h2>

      <ul className="heroes">
        {heroes.map((hero) => (
          <li key={hero.id}>
            <button type="button" onClick={() => onSelect(hero)}>
              <span className="badge">{hero.id}</span>
              <span className="name">{hero.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Heroes;
