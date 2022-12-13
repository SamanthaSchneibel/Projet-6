import { useEffect, useState } from "react";
import { getAll } from "../api/pokemons";
import { addToPokedex } from "../api/pokemons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PokemonHome() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const gotchapokemon = getAll();
        gotchapokemon
            .then(result => setPokemons(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Container>
        <h1>Capturez les pokemons sauvages</h1>
        <Row className="justify-content-md-center">
            {
                pokemons.map((pokemon, key) => {
                    return <Col key={key} xs={12} md={6} lg={4}><div className="bloc-pokemon">
                        <img className="avatar" src={pokemon.img1} alt="" />
                        <h2>{pokemon.name}</h2>
                        <button type="button" class="btn" onClick={() => addToPokedex(pokemon)}><img className="pokeball" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png" /></button>
                    </div>
                    </Col>
                })}
        </Row>
    </Container>
};

export default PokemonHome;