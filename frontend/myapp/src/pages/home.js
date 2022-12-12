import PokemonHome from "../components/PokemonHome";
import Navbar from "../components/navbar";

function Home(props) {
    return <div>
        <Navbar />
        <h1>Capturez les pokemons sauvages</h1>
        <PokemonHome/>
    </div>
}

export default Home;


