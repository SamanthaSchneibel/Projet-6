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
    return <div className="row text-center">
        <div className="col-lg-3">
            <div className="flex"> {
                pokemons.map((pokemon, key) => {
                    return <div key={key} className="bloc-pokedex">
                        <div className="background-avatar">
                            <img className="avatar" src={pokemon.img1} alt="" />
                        </div>
                        <div className="infos">
                            <h3><br />{pokemon.name}{pokemon.num}</h3>
                            <img className="type" src={pokemon.type} alt="" />
                            <img className="type2" src={pokemon.type2} alt="" />
                        </div>
                        <p><br />{pokemon.description}<br /></p>
                        <input type="text" id={key} name="Nom" />
                        <button type="button" className="btn btn-outline-dark" onClick={() => updatepokemon(pokemon, key)}>Renommer</button>
                        <button type="button" className="btn btn-outline-dark" onClick={() => deletepokemon(pokemon)}>Relâcher</button>
                    </div>
                })}
            </div>
        </div>
        <div className="col-lg-6">
            <div className="container">
                <h1>Vos pokemons dans le pc</h1>
            </div>
            <div className="background-pc">
                <img className="container" src="https://pixelmongenerations.com/wiki/images/9/9e/PC_Background_Forest.png"></img>
            </div>
            <div className="flex"> {
                pokemons.map((pokemon, key) => {
                    return <div key={key} className="bloc-pokedex">
                        <img type="button" className="avatar-pixel" src={pokemon.img2} alt="" />
                    </div>
                })}
            </div>
        </div>
    </div >;
};

export default Pokedex;