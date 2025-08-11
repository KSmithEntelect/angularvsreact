import React from "react";
import { Hero } from "../app/Hero";

interface HeroDetailProps {
  hero: Hero | null;
  updateHeroName: (name: string) => void;
}

const HeroDetail: React.FC<HeroDetailProps> = ({ hero, updateHeroName }) => {
 
  if (!hero) {
    return null;  
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
    </div>
  );
};

export default HeroDetail;
