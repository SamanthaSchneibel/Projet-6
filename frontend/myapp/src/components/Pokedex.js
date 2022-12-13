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
            {
                pokemons.map((pokemon, key) => {
                    return <Col key={key} xs lg="3">
                        <div className="div1 text-center">
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
                    </Col>
                })}
            {
                pokemons.map((pokemon, key) => {
                    return <Col key={key} xs lg="6">
                        <div className="div2">
                            <div className="bloc-pokedex">
                                <img type="button" className="avatar-pixel" src={pokemon.img2} alt="" />
                            </div>
                        </div>
                    </Col>
                })}
            <Col xs lg="3">
                <div className="div3 text-center">
                    <h3>Trier par</h3>
                </div>
            </Col>
        </Row>
    </Row>
};

export default Pokedex;