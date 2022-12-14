import { useEffect, useState } from "react";
import { getAll } from "../api/pokemons";
import { deletepokemonDash, postpokemonDash, updatepokemonnameDash } from "../api/dashboardapi";
import { useForm } from "react-hook-form";


export function Dashboardpoke() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        postpokemonDash(data)
    }
    const [pokemons, setPokemons] = useState([]);
    const [count, setcount] = useState(0);
    useEffect(() => {
        const gotchapokemon = getAll();
        gotchapokemon
            .then(result => setPokemons(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, [count]);
    return <div className="dashboard-list">
        <div className="form-create">
            <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <br />
                <br />
                <p>
                    <h2>Choisir le numéro du pokémon (ex: #000) : </h2>
                    <input {...register("num", { required: true })} placeholder="Numéro du pokemon" />
                </p>
                <br/>
                <p>
                    <h2>Choisir le nom du pokémon : </h2>
                    <input {...register("name", { required: true })} placeholder="Nom du pokemon" />
                </p>
                <br/>
                <div className="radio-create">
                    <h2>Choisir le Type 1 du pokemon : </h2>
                    <p>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/3/35/Miniature_Type_Plante_EB.png/70px-Miniature_Type_Plante_EB.png" id="type-plante" defaultChecked /><span><img src="https://www.pokepedia.fr/images/thumb/3/35/Miniature_Type_Plante_EB.png/70px-Miniature_Type_Plante_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/f/fc/Miniature_Type_Feu_EB.png/70px-Miniature_Type_Feu_EB.png" id="type-feu" /><span><img src="https://www.pokepedia.fr/images/thumb/f/fc/Miniature_Type_Feu_EB.png/70px-Miniature_Type_Feu_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/4/4c/Miniature_Type_Eau_EB.png/70px-Miniature_Type_Eau_EB.png" id="type-eau" /><span><img src="https://www.pokepedia.fr/images/thumb/4/4c/Miniature_Type_Eau_EB.png/70px-Miniature_Type_Eau_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/2/2e/Miniature_Type_Normal_EB.png/70px-Miniature_Type_Normal_EB.png" id="type-normal" /><span><img src="https://www.pokepedia.fr/images/thumb/2/2e/Miniature_Type_Normal_EB.png/70px-Miniature_Type_Normal_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/1/1c/Miniature_Type_Combat_EB.png/70px-Miniature_Type_Combat_EB.png" id="type-combat" /><span><img src="https://www.pokepedia.fr/images/thumb/1/1c/Miniature_Type_Combat_EB.png/70px-Miniature_Type_Combat_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/e/ee/Miniature_Type_Insecte_EB.png/70px-Miniature_Type_Insecte_EB.png" id="type-insecte" /><span><img src="https://www.pokepedia.fr/images/thumb/e/ee/Miniature_Type_Insecte_EB.png/70px-Miniature_Type_Insecte_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/2/28/Miniature_Type_Poison_EB.png/70px-Miniature_Type_Poison_EB.png" id="type-poison" /><span><img src="https://www.pokepedia.fr/images/thumb/2/28/Miniature_Type_Poison_EB.png/70px-Miniature_Type_Poison_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/7/7e/Miniature_Type_Glace_EB.png/70px-Miniature_Type_Glace_EB.png" id="type-glace" /><span><img src="https://www.pokepedia.fr/images/thumb/7/7e/Miniature_Type_Glace_EB.png/70px-Miniature_Type_Glace_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/d/da/Miniature_Type_Psy_EB.png/70px-Miniature_Type_Psy_EB.png" id="type-psy" /><span><img src="https://www.pokepedia.fr/images/thumb/d/da/Miniature_Type_Psy_EB.png/70px-Miniature_Type_Psy_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/e/e5/Miniature_Type_Spectre_EB.png/70px-Miniature_Type_Spectre_EB.png" id="type-spectre" /><span><img src="https://www.pokepedia.fr/images/thumb/e/e5/Miniature_Type_Spectre_EB.png/70px-Miniature_Type_Spectre_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/f/f4/Miniature_Type_T%C3%A9n%C3%A8bres_EB.png/70px-Miniature_Type_T%C3%A9n%C3%A8bres_EB.png" id="type-tenebre" /><span><img src="https://www.pokepedia.fr/images/thumb/f/f4/Miniature_Type_T%C3%A9n%C3%A8bres_EB.png/70px-Miniature_Type_T%C3%A9n%C3%A8bres_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/d/d6/Miniature_Type_Sol_EB.png/70px-Miniature_Type_Sol_EB.png" id="type-sol" /><span><img src="https://www.pokepedia.fr/images/thumb/d/d6/Miniature_Type_Sol_EB.png/70px-Miniature_Type_Sol_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/6/62/Miniature_Type_Vol_EB.png/70px-Miniature_Type_Vol_EB.png" id="type-vol" /><span><img src="https://www.pokepedia.fr/images/thumb/6/62/Miniature_Type_Vol_EB.png/70px-Miniature_Type_Vol_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/d/d3/Miniature_Type_Roche_EB.png/70px-Miniature_Type_Roche_EB.png" id="type-roche" /><span><img src="https://www.pokepedia.fr/images/thumb/d/d3/Miniature_Type_Roche_EB.png/70px-Miniature_Type_Roche_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/b/b9/Miniature_Type_Acier_EB.png/70px-Miniature_Type_Acier_EB.png" id="type-acier" /><span><img src="https://www.pokepedia.fr/images/thumb/b/b9/Miniature_Type_Acier_EB.png/70px-Miniature_Type_Acier_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/2/23/Miniature_Type_Dragon_EB.png/70px-Miniature_Type_Dragon_EB.png" id="type-dragon" /><span><img src="https://www.pokepedia.fr/images/thumb/2/23/Miniature_Type_Dragon_EB.png/70px-Miniature_Type_Dragon_EB.png" alt="" /></span>
                        <input {...register("type")} name="type" type="radio" value="https://www.pokepedia.fr/images/thumb/3/3e/Miniature_Type_F%C3%A9e_EB.png/70px-Miniature_Type_F%C3%A9e_EB.png" id="type-fee" /><span><img src="https://www.pokepedia.fr/images/thumb/3/3e/Miniature_Type_F%C3%A9e_EB.png/70px-Miniature_Type_F%C3%A9e_EB.png" alt="" /></span>
                    </p>

                    <br/>

                    <h2>Choisir le Type 2 du pokemon (non obligatoire) :</h2>

                    <p>
                        <input name="type2" type="radio" id="rien2" value="" /><span><label>Aucun</label></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/3/35/Miniature_Type_Plante_EB.png/70px-Miniature_Type_Plante_EB.png" id="type-plante2" /><span><img src="https://www.pokepedia.fr/images/thumb/3/35/Miniature_Type_Plante_EB.png/70px-Miniature_Type_Plante_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/f/fc/Miniature_Type_Feu_EB.png/70px-Miniature_Type_Feu_EB.png" id="type-feu2" /><span><img src="https://www.pokepedia.fr/images/thumb/f/fc/Miniature_Type_Feu_EB.png/70px-Miniature_Type_Feu_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/4/4c/Miniature_Type_Eau_EB.png/70px-Miniature_Type_Eau_EB.png" id="type-eau2" /><span><img src="https://www.pokepedia.fr/images/thumb/4/4c/Miniature_Type_Eau_EB.png/70px-Miniature_Type_Eau_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/2/2e/Miniature_Type_Normal_EB.png/70px-Miniature_Type_Normal_EB.png" id="type-normal2" /><span><img src="https://www.pokepedia.fr/images/thumb/2/2e/Miniature_Type_Normal_EB.png/70px-Miniature_Type_Normal_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/1/1c/Miniature_Type_Combat_EB.png/70px-Miniature_Type_Combat_EB.png" id="type-combat2" /><span><img src="https://www.pokepedia.fr/images/thumb/1/1c/Miniature_Type_Combat_EB.png/70px-Miniature_Type_Combat_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/e/ee/Miniature_Type_Insecte_EB.png/70px-Miniature_Type_Insecte_EB.png" id="type-insecte2" /><span><img src="https://www.pokepedia.fr/images/thumb/e/ee/Miniature_Type_Insecte_EB.png/70px-Miniature_Type_Insecte_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/2/28/Miniature_Type_Poison_EB.png/70px-Miniature_Type_Poison_EB.png" id="type-poison2" /><span><img src="https://www.pokepedia.fr/images/thumb/2/28/Miniature_Type_Poison_EB.png/70px-Miniature_Type_Poison_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/7/7e/Miniature_Type_Glace_EB.png/70px-Miniature_Type_Glace_EB.png" id="type-glace2" /><span><img src="https://www.pokepedia.fr/images/thumb/7/7e/Miniature_Type_Glace_EB.png/70px-Miniature_Type_Glace_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/d/da/Miniature_Type_Psy_EB.png/70px-Miniature_Type_Psy_EB.png" id="type-psy2" /><span><img src="https://www.pokepedia.fr/images/thumb/d/da/Miniature_Type_Psy_EB.png/70px-Miniature_Type_Psy_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/e/e5/Miniature_Type_Spectre_EB.png/70px-Miniature_Type_Spectre_EB.png" id="type-spectre2" /><span><img src="https://www.pokepedia.fr/images/thumb/e/e5/Miniature_Type_Spectre_EB.png/70px-Miniature_Type_Spectre_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/f/f4/Miniature_Type_T%C3%A9n%C3%A8bres_EB.png/70px-Miniature_Type_T%C3%A9n%C3%A8bres_EB.png" id="type-tenebre2" /><span><img src="https://www.pokepedia.fr/images/thumb/f/f4/Miniature_Type_T%C3%A9n%C3%A8bres_EB.png/70px-Miniature_Type_T%C3%A9n%C3%A8bres_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/d/d6/Miniature_Type_Sol_EB.png/70px-Miniature_Type_Sol_EB.png" id="type-sol2" /><span><img src="https://www.pokepedia.fr/images/thumb/d/d6/Miniature_Type_Sol_EB.png/70px-Miniature_Type_Sol_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/6/62/Miniature_Type_Vol_EB.png/70px-Miniature_Type_Vol_EB.png" id="type-vol2" /><span><img src="https://www.pokepedia.fr/images/thumb/6/62/Miniature_Type_Vol_EB.png/70px-Miniature_Type_Vol_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/d/d3/Miniature_Type_Roche_EB.png/70px-Miniature_Type_Roche_EB.png" id="type-roche2" /><span><img src="https://www.pokepedia.fr/images/thumb/d/d3/Miniature_Type_Roche_EB.png/70px-Miniature_Type_Roche_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/b/b9/Miniature_Type_Acier_EB.png/70px-Miniature_Type_Acier_EB.png" id="type-acier2" /><span><img src="https://www.pokepedia.fr/images/thumb/b/b9/Miniature_Type_Acier_EB.png/70px-Miniature_Type_Acier_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/2/23/Miniature_Type_Dragon_EB.png/70px-Miniature_Type_Dragon_EB.png" id="type-dragon2" /><span><img src="https://www.pokepedia.fr/images/thumb/2/23/Miniature_Type_Dragon_EB.png/70px-Miniature_Type_Dragon_EB.png" alt="" /></span>
                        <input {...register("type2")} name="type2" type="radio" value="https://www.pokepedia.fr/images/thumb/3/3e/Miniature_Type_F%C3%A9e_EB.png/70px-Miniature_Type_F%C3%A9e_EB.png" id="type-fee2" /><span><img src="https://www.pokepedia.fr/images/thumb/3/3e/Miniature_Type_F%C3%A9e_EB.png/70px-Miniature_Type_F%C3%A9e_EB.png" alt="" /></span>
                    </p>
                </div>
                <br/>
                <p>
                    <h2>Donner une description à votre pokemon :</h2>
                    <textarea {...register("description", { required: true })} placeholder="Description" />
                </p>
                <br/>
                <p>
                    <h2>Entrez l'url de l'image de votre pokemon :</h2>
                    <br/>
                    <input {...register("img1", { required: true })} type="text" placeholder="Url de l'image du pokémon 1" />
                    <h2>Entrez l'url du pixelart de votre pokemon :</h2>
                    <br/>
                    <input {...register("img2")} type="text" placeholder="Url de l'image du pokémon 2" />
                </p>
                <button type="submit">Créer</button>
            </form>
        </div>
        <div className="flex"> {
            pokemons.map((pokemon, key) => {
                return <div key={key} className="bloc-dashboard">
                    <img className="avatar" src={pokemon.img1} alt="" />
                    <img className="avatar-pixel" src={pokemon.img2} alt="" />
                    <img className="type" src={pokemon.type} alt="" />
                    <img className="type2" src={pokemon.type2} alt="" />
                    <h2>{pokemon._id}<br />Numéro du pokedex: {pokemon.num} <br />Nom: {pokemon.name} <br /> Description: {pokemon.description}</h2>
                    <input type="text" id={key} name="Nom" />
                    <button onClick={() => { updatepokemonnameDash(pokemon, key); setcount(count + 1) }}>Changer le nom du pokemon</button>
                    <button onClick={() => { deletepokemonDash(pokemon); setcount(count + 1) }}>Supprimer le pokemon</button>
                </div>
            })}

        </div>

        ;
    </div>;

};
