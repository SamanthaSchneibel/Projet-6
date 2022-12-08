import { useEffect, useState } from "react";
import { getAll } from "../api/pokemons";
import { addToPokedex } from "../api/pokemons";

function PokemonHome() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const gotchapokemon = getAll();
        gotchapokemon
            .then(result => setPokemons(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <div className="pokemon-list">
        <div class="flex"> {
            pokemons.map((pokemon, key) => {
                return <div key={key} className="bloc-pokemon">
                    {/* <img className="avatar" src={pokemon.img} /> */}
                    <h2>{pokemon.name}</h2>
                    <button onClick={() => addToPokedex(pokemon.name)}>Capturer !</button>
                </div>
            })}
        </div>
    </div>;
};

export default PokemonHome;