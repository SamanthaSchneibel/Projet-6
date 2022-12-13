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
    return <Container>
        <h1>Vos pokemons dans le pc</h1>
        <img className="background-pc" src="https://pixelmongenerations.com/wiki/images/9/9e/PC_Background_Forest.png"></img>
        <Row className="div2 justify-content-md-center">
            {
                pokemons.map((pokemon, key) => {
                    return <Col key={key} xs={{ order: 1 }}><div className="bloc-pokedex">
                        <img type="button" className="avatar-pixel" src={pokemon.img2} alt="" />
                    </div>
                    </Col>
                })}
        </Row>
    </Container>
};

export default Pokedex;