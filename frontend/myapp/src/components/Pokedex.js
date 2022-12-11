import { useEffect, useState } from "react";
import { addedpokemon } from "../api/pokedexapi";
import { updatepokemon } from "../api/pokedexapi";

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
                    <img className="avatar" src={pokemon.img} alt="" />
                    <h2>ID: {pokemon._id} Numéro: {pokemon.num} Nom: {pokemon.name} Type: {pokemon.type}</h2>
                    <button onClick={() => updatepokemon(pokemon)}> Modifier nom:</button>
                </div>
            })}
        </div>
    </div>;
};

export default Pokedex;