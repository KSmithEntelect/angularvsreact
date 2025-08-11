import { Hero } from "../app/Hero";

const useHeroService = () => {
  const getHeroes = async () => {
    //No error handling for simplicity
    //This fetches data from the mock server running on port 3002
    const response = await fetch(`http://localhost:3002/heroes`);
    const data = await response.json();
    const heroes = data as Hero[];
    return heroes;
  };

  const getHero = async (id: string) => {
    //No error handling for simplicity
    //This fetches a single hero by ID from the mock server running on port 3002
    debugger;
    const response = await fetch(`http://localhost:3002/heroes/${id}`);
    const data = await response.json();
    const hero = data as Hero;
    return hero;
  };

  const updateHero = async (id: string, name: string) => {
    //No error handling for simplicity
    //This updates the hero's name on the mock server 
    await fetch(`http://localhost:3002/heroes/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        name: name,
      }),
    });
  };

  return {
    getHeroes,
    getHero,
    updateHero,
  };
};

export default useHeroService;
