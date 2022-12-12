import Navbar from "../components/navbar";
import Pokedex from "../components/Pokedex";

function PokedexPage(){
    return <div><Navbar/>
    <h1>Vos Pokemons dans le PC</h1>
    <Pokedex/> </div>;
}

export default PokedexPage;