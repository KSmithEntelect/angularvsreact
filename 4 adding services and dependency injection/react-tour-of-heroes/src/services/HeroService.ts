import { HEROES } from "../app/mock-heroes";

const useHeroService = () => {
  const getHeroes = async () => {
    return HEROES.map((hero) => ({
      ...hero,
    }));
  };

  return { getHeroes };
};

export default useHeroService;