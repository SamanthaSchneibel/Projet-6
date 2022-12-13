import { useEffect, useState } from "react";
import { getAll } from "../api/pokemons";
import { deletepokemonDash, postpokemonDash, updatepokemonDash } from "../api/dashboardapi";

export function Createpoke() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const postpoke = postpokemonDash();
        postpoke
            .then(result => setPokemons(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    pokemons.map((pokemon, key) => {
        return <div className="pokemon-create">
            <form>
                <fieldset>
                    <p>
                        <label>Entrez le numéro de votre pokémon :</label> <input type="text" id={pokemon.num} name="num" required className="required text" />
                        <label>Entrez le nom de votre pokemon :</label> <input type="text" id={pokemon.name} name="name" required className="required text" />
                        <label>Entrez une description de votre pokemon :</label> <input type="text" id={pokemon.description} name="description" required className="required text" />
                    </p>

                    <div id={pokemon.type}>
                        <p>
                            <label><input name="type" type="radio" value="plante" id="type-plante" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/3/35/Miniature_Type_Plante_EB.png/70px-Miniature_Type_Plante_EB.png" alt="" /></span></label>
                            <label><input name="type" type="radio" value="feu" id="type-feu" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/f/fc/Miniature_Type_Feu_EB.png/70px-Miniature_Type_Feu_EB.png" alt="" /></span></label>
                            <label><input name="type" type="radio" value="eau" id="type-eau" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/4/4c/Miniature_Type_Eau_EB.png/70px-Miniature_Type_Eau_EB.png" alt="" /></span></label>
                            <label><input name="type" type="radio" value="normal" id="type-normal" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/2/2e/Miniature_Type_Normal_EB.png/70px-Miniature_Type_Normal_EB.png" alt="" /></span></label>
                            <label><input name="type" type="radio" value="combat" id="type-combat" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/f/fa/Miniature_Type_Combat_LPA.png/70px-Miniature_Type_Combat_LPA.png" alt="" /></span></label>
                            <label><input name="type" type="radio" value="insecte" id="type-insecte" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/e/ee/Miniature_Type_Insecte_EB.png/70px-Miniature_Type_Insecte_EB.png" alt="" /></span></label>
                            <label><input name="type" type="radio" value="poison" id="type-poison" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/2/28/Miniature_Type_Poison_EB.png/70px-Miniature_Type_Poison_EB.png" alt="" /></span></label>
                            <label><input name="type" type="radio" value="glace" id="type-glace" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/7/7e/Miniature_Type_Glace_EB.png/70px-Miniature_Type_Glace_EB.png" alt="" /></span></label>
                            <label><input name="type" type="radio" value="psy" id="type-psy" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/d/da/Miniature_Type_Psy_EB.png/70px-Miniature_Type_Psy_EB.png" alt="" /></span></label>
                        </p>
                    </div>

                    <p>
                        <label>Entrez l'url de l'image 1 de votre pokemon :</label> <input type="text" id={pokemon.img1} name="img1" required className="required text" />
                        <label>Entrez l'url de l'image 2 de votre pokemon :</label> <input type="text" id={pokemon.img2} name="img2" required className="required text" />
                    </p>

                    <button onClick={() => postpokemonDash(pokemon, key)}>Créer un pokemon</button>
                </fieldset>
            </form>
        </div>
    })
};


export function Dashboardpoke() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const gotchapokemon = getAll();
        gotchapokemon
            .then(result => setPokemons(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <div className="dashboard-list">
        <div className="flex"> {
            pokemons.map((pokemon, key) => {
                return <div key={key} className="bloc-dashboard">
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
