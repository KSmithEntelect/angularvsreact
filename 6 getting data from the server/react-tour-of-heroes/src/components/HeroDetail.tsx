import React, { useEffect } from "react";
import { Hero } from "../app/Hero";
import { useParams } from "react-router-dom";
import useHeroService from "../services/HeroService";
import { Link } from "react-router-dom";

const HeroDetail: React.FC = () => {

  const { id } = useParams();
  
  const { getHero, updateHero } = useHeroService();
  const [hero, setHero] = React.useState<Hero | null>(null);

  const updateHeroName = (name: string) => {
    if (hero) {
      const updated = { ...hero, name };
      setHero(updated);
      if (id) updateHero(id, name);
    }
  };

  useEffect(() => {
    if (!id) return;
    const fetchHero = async (id: string) => {
      const hero = await getHero(id);
      setHero(hero);
    };
    fetchHero(id);
  }, [id]);

  if (!hero) {
    return <div>Hero not found</div>;
  }

  return (
    <div>
      <h2>{hero.name.toUpperCase()} Details</h2>
      <div>id: {hero.id}</div>
      <div>
        <label htmlFor="hero-name">Hero name: </label>
        <input
          id="hero-name"
          value={hero.name}
          onChange={(e) => updateHeroName(e.target.value)}
          placeholder="name"
        />
      </div>
      <div>
        <Link to="/dashboard">Back</Link>
      </div>
    </div>
  );
};

export default HeroDetail;
