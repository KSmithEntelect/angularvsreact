import React, { useState } from "react";
import { Hero } from "../app/Hero";
import { HEROES } from "../app/mock-heroes";
import "./Heroes.css";
import HeroDetail from "./HeroDetail";

const Heroes: React.FC = () => {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [heroes, setHeroes] = useState<Hero[]>(HEROES);

  const onSelect = (hero: Hero) => {
    setSelectedHero(hero);
  };

  const updateHeroName = (name: string) => {
    if (selectedHero) {
      const updated = { ...selectedHero, name };
      setSelectedHero(updated);
      setHeroes(heroes.map(h => h.id === updated.id ? updated : h));
    }
  };

  return (
    <div>
      <h2>My Heroes</h2>

      <ul className="heroes">
        {heroes.map((hero) => (
          <li key={hero.id}>
            <button
              type="button"
              className={hero === selectedHero ? "selected" : ""}
              onClick={() => onSelect(hero)}
            >
              <span className="badge">{hero.id}</span>
              <span className="name">{hero.name}</span>
            </button>
          </li>
        ))}
      </ul>

      <HeroDetail
        hero={selectedHero}
        updateHeroName={updateHeroName}
      />
    </div>
  );
};

export default Heroes;
