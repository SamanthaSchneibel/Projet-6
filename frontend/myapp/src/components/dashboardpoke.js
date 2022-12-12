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
                    <h2>{pokemon._id}<br />Numéro du pokedex: {pokemon.num} <br />Nom: {pokemon.name} <br /> Description: {pokemon.description}</h2>
                    <input type="text" id={key} name="Nom" />
                    <button onClick={() => updatepokemonDash(pokemon, key)}>Donner un nouveau Nom</button>
                    <button onClick={() => deletepokemonDash(pokemon)}>Supprimer le pokemon</button>
                    <form method="POST" enctype="text/plain">
                        <fieldset>
                            <div className="pokemon">
                                <p>
                                    <label for="num">Entrez le numéro de votre pokémon :</label> <input type="text" id="num" name="num" required class="required text" />
                                    <label for="name">Entrez le nom de votre pokemon :</label> <input type="text" id="name" name="name" required class="required text" />
                                    <label for="type">Entrez le type de votre pokemon :</label> <input type="text" id="type" name="type" required class="required text" />
                                    <label for="description">Entrez une description de votre pokemon :</label> <input type="text" id="description" name="description" required class="required text" />
                                </p>
                                <p>
                                    <select name="type" id="type">
                                        <option value="plante"><img src="https://www.pokepedia.fr/images/thumb/3/35/Miniature_Type_Plante_EB.png/70px-Miniature_Type_Plante_EB.png" /></option>
                                        <option value="feu"><img src="https://www.pokepedia.fr/images/thumb/f/fc/Miniature_Type_Feu_EB.png/70px-Miniature_Type_Feu_EB.png" /></option>
                                        <option value="eau"><img src="https://www.pokepedia.fr/images/thumb/4/4c/Miniature_Type_Eau_EB.png/70px-Miniature_Type_Eau_EB.png" /></option>
                                        <option value="normal"><img src="https://www.pokepedia.fr/images/thumb/2/2e/Miniature_Type_Normal_EB.png/70px-Miniature_Type_Normal_EB.png" /></option>
                                        <option value="combat"><img src="https://www.pokepedia.fr/images/thumb/f/fa/Miniature_Type_Combat_LPA.png/70px-Miniature_Type_Combat_LPA.png" /></option>
                                        <option value="insecte"><img src="https://www.pokepedia.fr/images/thumb/e/ee/Miniature_Type_Insecte_EB.png/70px-Miniature_Type_Insecte_EB.png" /></option>
                                        <option value="poison"><img src="https://www.pokepedia.fr/images/thumb/2/28/Miniature_Type_Poison_EB.png/70px-Miniature_Type_Poison_EB.png" /></option>
                                        <option value="glace"><img src="https://www.pokepedia.fr/images/thumb/7/7e/Miniature_Type_Glace_EB.png/70px-Miniature_Type_Glace_EB.png" /></option>
                                        <option value="psy"><img src="https://www.pokepedia.fr/images/thumb/d/da/Miniature_Type_Psy_EB.png/70px-Miniature_Type_Psy_EB.png" /></option>
                                    </select>
                                </p>
                                <p>
                                    <label for="img1">Entrez l'url type de votre pokemon :</label> <input type="text" id="img1" name="img1" required class="required text" />
                                    <label for="img2">Entrez le type de votre pokemon :</label> <input type="text" id="img2" name="img2" required class="required text" />
                                </p>
                                <button onClick={() => postpokemonDash(pokemon)}>Créer un pokemon</button>
                            </div>
                        </fieldset>
                    </form>
                </div>

            })}
        </div>
    </div>;

};

export default Dashboardpoke;