import Navbar from "../components/navbar";
import Pokedex from "../components/Pokedex";

function PokedexPage(){
    return <div><Navbar/>
        <div className="container">
            <h1>Vos pokemons dans le pc</h1>
        </div>
    <Pokedex/> </div>;
}

export default PokedexPage;