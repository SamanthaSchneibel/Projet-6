import { useEffect, useState } from "react";
import { getAll } from "../api/pokemons";
import { deletepokemonDash, postpokemonDash, updatepokemonDash } from "../api/dashboardapi";

export function Createpoke() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const gotchapokemon = getAll();
        gotchapokemon
            .then(result => setPokemons(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <div className="pokemon-create">
        <div className="flex">{
            pokemons.map((pokemon, key) => {
                return <div key={key} className="pokemon">
                    <form>
                        <fieldset>
                            <p>
                                <label for="num">Entrez le numéro de votre pokémon :</label> <input type="text" id="num" name={pokemon.num} required className="required text" />
                                <label for="name">Entrez le nom de votre pokemon :</label> <input type="text" id="name" name={pokemon.name} required className="required text" />
                                <label for="description">Entrez une description de votre pokemon :</label> <input type="text" id={pokemon.description} name="pokemon.description" required className="required text" />
                            </p>

                            <div id={pokemon.type}>
                                <p>
                                    <label><input name="pokemon.type" type="radio" value="plante" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/3/35/Miniature_Type_Plante_EB.png/70px-Miniature_Type_Plante_EB.png" alt="" /></span></label>
                                    <label><input name="pokemon.type" type="radio" value="feu" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/f/fc/Miniature_Type_Feu_EB.png/70px-Miniature_Type_Feu_EB.png" alt="" /></span></label>
                                    <label><input name="pokemon.type" type="radio" value="eau" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/4/4c/Miniature_Type_Eau_EB.png/70px-Miniature_Type_Eau_EB.png" alt="" /></span></label>
                                    <label><input name="pokemon.type" type="radio" value="normal" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/2/2e/Miniature_Type_Normal_EB.png/70px-Miniature_Type_Normal_EB.png" alt="" /></span></label>
                                    <label><input name="pokemon.type" type="radio" value="combat" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/f/fa/Miniature_Type_Combat_LPA.png/70px-Miniature_Type_Combat_LPA.png" alt="" /></span></label>
                                    <label><input name="pokemon.type" type="radio" value="insecte" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/e/ee/Miniature_Type_Insecte_EB.png/70px-Miniature_Type_Insecte_EB.png" alt="" /></span></label>
                                    <label><input name="pokemon.type" type="radio" value="poison" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/2/28/Miniature_Type_Poison_EB.png/70px-Miniature_Type_Poison_EB.png" alt="" /></span></label>
                                    <label><input name="pokemon.type" type="radio" value="glace" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/7/7e/Miniature_Type_Glace_EB.png/70px-Miniature_Type_Glace_EB.png" alt="" /></span></label>
                                    <label><input name="pokemon.type" type="radio" value="psy" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/d/da/Miniature_Type_Psy_EB.png/70px-Miniature_Type_Psy_EB.png" alt="" /></span></label>
                                </p>
                            </div>


                            <p>
                                <label for="img1">Entrez l'url de l'image 1 de votre pokemon :</label> <input type="text" id="img1" name={pokemon.img1} required className="required text" />
                                <label for="img2">Entrez l'url de l'image 2 de votre pokemon :</label> <input type="text" id="img2" name={pokemon.img2} required className="required text" />
                            </p>
                            <button onClick={() => postpokemonDash(pokemon)}>Créer un pokemon</button>
                        </fieldset>
                    </form>
                </div>
            })}
        </div>
    </div>;
};

export function Dashboardpoke() {
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
                    <h2>{pokemon._id}<br />Numéro du pokedex: {pokemon.num} <br />Nom: {pokemon.name} <br /> Description: {pokemon.description}</h2>
                    <input type="text" id={key} name="Nom" />
                    <button onClick={() => updatepokemonDash(pokemon, key)}>Donner un nouveau Nom</button>
                    <button onClick={() => deletepokemonDash(pokemon)}>Supprimer le pokemon</button>
                </div>
            })}
        </div>
    </div>;

};
