// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon
import { useState, useEffect, useContext } from "react";
import handleFetch from '../utils/handleFetch';
import PokemonContext from "../context/PokemonContext";

const Filter = () => {
    // states of gifs, error, and query 
    const [userEntry, settingUserEntry] = useState('');
    console.log(userEntry);
    const [error, setError] = useState();
    // use the context given the state of PokemonContext, but only use setAllPokemon funct 
    const setPokemon = useContext(PokemonContext).setAllPokemon; 

    useEffect(() => {
        const doFetch = async () => {
        const [data, error] = await handleFetch('http://localhost:4000/pokemon');
            if (data) setPokemon(data.filter((pokemon) => pokemon.name.includes(userEntry.toLowerCase())));
            // console.log(data);
            if (error) setError(error);
        };
        doFetch();
    }, [userEntry]);

    if (error) return <p>{error.message}</p>

    return (
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" placeholder="Search by Name..." value={userEntry} onChange={(e) => settingUserEntry(e.target.value)} />
                <i className="search icon" />
            </div>
        </div>
    )
}

export default Filter