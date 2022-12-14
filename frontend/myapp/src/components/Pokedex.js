import { useEffect, useState } from "react";
import { addedpokemon, updatepokemon, deletepokemon } from "../api/pokedexapi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
                                        <button type="button" className="btn btn-outline-dark" onClick={() => updatepokemon(pokemon, key)}>Renommer</button>
                                        <button type="button" className="btn btn-outline-dark" onClick={() => deletepokemon(pokemon)}>Relâcher</button>
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
                <div className="col-lg-3">
                        <div className="bloc text-center">
                            <h3>Trier par</h3>
                        </div>
                </div>
            </div>
        </Row>
    </Row>
};

export default Pokedex;