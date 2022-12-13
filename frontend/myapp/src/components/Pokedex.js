import { useEffect, useState } from "react";
import { addedpokemon, updatepokemon, deletepokemon } from "../api/pokedexapi";

function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const recupokemon = addedpokemon();
        recupokemon
            .then(result => setPokemons(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <div className="pokedex-list">
            <img className="container" src="https://pixelmongenerations.com/wiki/images/9/9e/PC_Background_Forest.png"></img>
        <div className="flex"> {
            pokemons.map((pokemon, key) => {
                return <div key={key} className="bloc-pokedex">
                    <div id="popup" className="overlay">
                        <div className="popup bg-light">
                            <img className="avatar" src={pokemon.img1} alt="" />
                            <img className="type" src={pokemon.type} alt="" />
                            <h3>{pokemon._id}<br/>Numéro du pokedex: {pokemon.num} <br/>Nom: {pokemon.name} <br/> Description: {pokemon.description}</h3>
                            <input type="text" id={key} name="Nom" required className="required text"/>
                            <button type="button" class="btn btn-outline-danger" onClick={() => updatepokemon(pokemon, key)}>Renommer</button>
                            <button type="button" class="btn btn-outline-danger" onClick={() => deletepokemon(pokemon)}>Relâcher</button>
                        </div>
                    </div>
                    <img type="button" className="avatar-pixel" src={pokemon.img2} alt="" />   
                </div>
            })}
        </div>
    </div>;
};

export default Pokedex;