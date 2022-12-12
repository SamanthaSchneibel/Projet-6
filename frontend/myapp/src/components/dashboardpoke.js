import { useEffect, useState } from "react";
import { getAll } from "../api/pokemons";
import { deletepokemonDash, updatepokemonDash } from "../api/dashboardapi";

function Dashboardpoke() {
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
                    <img className="avatar-pixel" src={pokemon.img2} alt="" />
                    <img className="type" src={pokemon.type} alt="" />
                    <h2>{pokemon._id}<br/>Numéro du pokedex: {pokemon.num} <br/>Nom: {pokemon.name} <br/> Description: {pokemon.description}</h2>
                    <input type="text" id={key} name="Nom"/>
                    <button onClick={() => updatepokemonDash(pokemon, key)}>Donner un nouveau Nom</button>
                    <button onClick={() => deletepokemonDash(pokemon)}>Supprimer le pokemon</button>
                </div>
            })}
        </div>
    </div>;
};

export default Dashboardpoke;