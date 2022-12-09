import { useEffect, useState } from "react";
import { addedpokemon } from "../api/pokedexapi";

function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const recupokemon = addedpokemon();
        recupokemon
            .then(result => setPokemons(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <div className="pokemon-list">
        <div className="flex"> {
            pokemons.map((pokemon, key) => {
                return <div key={key} className="bloc-pokemon">
                    <img className="avatar" src={addedpokemon.img} alt="" />
                    <h2>{addedpokemon.name}</h2>
                </div>
            })}
        </div>
    </div>;
};

export default Pokedex;