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
        <div className="flex"> {
            pokemons.map((pokemon, key) => {
                return <div key={key} className="bloc-pokemon">
                    <img className="avatar" src={pokemon.img1} alt="" />
                    <h2>{pokemon.name}</h2>
                    <button type="button" class="btn" onClick={() => addToPokedex(pokemon)}><img className="pokeball" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"/></button>
                </div>
            })}
        </div>
    </div>;
};

export default PokemonHome;