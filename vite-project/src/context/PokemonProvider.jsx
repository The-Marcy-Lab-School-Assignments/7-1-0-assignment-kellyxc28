import { useState, useEffect } from "react";
import handleFetch from '../utils/handleFetch';
// TODO: Import the PokemonContext
import PokemonContext from './PokemonContext';

// commented out because it repeated the first image 
// const starterPokemon = [
//     {
//         id: 0,
//         name: "butterfree 1",
//         hp: 60,
//         front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
//         back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
//     },
//     {
//         id: 1,
//         name: "butterfree 2",
//         hp: 60,
//         front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
//         back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
//     },
//     {
//         id: 2,
//         name: "butterfree 3",
//         hp: 60,
//         front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
//         back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
//     }
// ]

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState();
    const [error, setError] = useState();

    // TODO: use useEffect to fetch data from the local JSON server (remember to start JSON server!)
    useEffect(() => {
        const doFetch = async () => {
        //   const [data, error] = await handleFetch(query ? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`: `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`);
          const [data, error] = await handleFetch('http://localhost:4000/pokemon');
          if (data) setAllPokemon(data);
          console.log(data);
          if (error) setError(error);
        };
        doFetch();
      }, []);
    
      useEffect(() => {
        console.log(allPokemon);
        // console.log(pokemon); // 'pokemon' is undefined 
        // console.log('Hello!');
      }, [allPokemon])
    
      if (error) return <p>{error.message}</p>

    // TODO: Add values to be included in the context here
    let contextValues = { allPokemon, setAllPokemon };

    // TODO: Wrap the {children} in the PokemonContext.Provider and provide the values above
    return (
        <PokemonContext.Provider value={contextValues}>
            { children }
        </PokemonContext.Provider>
    );
}

export default PokemonProvider;