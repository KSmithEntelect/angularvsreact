import { useState } from "react";
import { HEROES } from "../app/mock-heroes";
import { Hero } from "../app/Hero";

const useHeroService = () => {

  const [heroes, setHeroes] = useState<Hero[]>(HEROES);

  const getHeroes = async () => {
    return heroes.map((hero) => ({
      ...hero,
    }));
  };

  const getHero = async (id: string) => {
    return heroes.find((hero) => hero.id === parseInt(id)) || null;
  };

  const updateHero = (id: string, name: string) => {
    const selectedHero = heroes.find((hero) => hero.id === parseInt(id));
    if (selectedHero) { 
      const updated = { ...selectedHero, name };
      setHeroes(heroes.map(h => h.id === updated.id ? updated : h));
    }
  };

  return {
    getHeroes,
    getHero,
    updateHero
  };
};

export default useHeroService;
