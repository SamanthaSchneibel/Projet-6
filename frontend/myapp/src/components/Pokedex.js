import { useEffect, useState } from "react";
import { getAll } from "../api/pokedexapi"
import { addToPokedex } from "../api/pokemons";

function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const addToPokedex = getAll();
        addToPokedex
            .then(result => setPokemons(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <div className="pokemon-pokedex">
        <div className="flex"> {
            pokemons.map((key) => {
                return <div key={key} className="bloc-pokemon">
                    <img className="avatar" src={addToPokedex.img} alt=""/>
                    <h2>{addToPokedex}</h2>
                </div>
            })}
        </div>
    </div>;
};

export default Pokedex;