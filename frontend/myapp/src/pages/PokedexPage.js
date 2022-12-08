import Navbar from "../components/Navbar";
import Pokedex from "../components/Pokedex";

function PokedexPage(){
    return <div><Navbar/>
    <h1>Vos Pokemon !</h1>
    <Pokedex/> </div>;
}

export default PokedexPage;