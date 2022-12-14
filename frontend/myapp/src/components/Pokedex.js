import { useEffect, useState } from "react";
import { addedpokemon, updatepokemon, deletepokemon } from "../api/pokedexapi";
import Row from 'react-bootstrap/Row';

function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    const [count, setcount] = useState(0);
    useEffect(() => {
        const recupokemon = addedpokemon();
        recupokemon
            .then(result => setPokemons(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, [count]);
    return <Row>
        <h1>Vos pokemons dans le pc</h1>
        <Row className="justify-content-md-center">
            <div className="row">
                <div className="col-lg-3">
                    {
                        pokemons.map((pokemon, key) => {
                            return <div className="bloc text-center">
                                    <div className="bloc-pokedex">
                                        <img className="avatar" src={pokemon.img1} alt="" />
                                        <h3><br />{pokemon.name}{pokemon.num}</h3>
                                        <img className="type" src={pokemon.type} alt="" />
                                        <img className="type2" src={pokemon.type2} alt="" />
                                        <p><br />{pokemon.description}<br /></p>
                                        <input type="text" id={key} name="Nom" />
                                        <button type="button" className="btn btn-outline-dark" onClick={() => {updatepokemon(pokemon, key); setcount(count+1)}}>Renommer</button>
                                        <button type="button" className="btn btn-outline-dark" onClick={() => {deletepokemon(pokemon); setcount(count+1)}}>Relâcher</button>
                                    </div>
                                </div>
                        })}
                </div>
                <div className="col-lg-6">
                        <div className="bloc">
                        <div className="bloc-pokedex">
                            {
                                pokemons.map((pokemon, key) => {
                                    return <img key={key} type="button" className="avatar-pixel" src={pokemon.img2} alt="" />
                                })}
                            </div>
                        </div>
                </div>
            </div>
        </Row>
    </Row>
};

export default Pokedex;
