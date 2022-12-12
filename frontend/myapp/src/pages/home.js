import PokemonHome from "../components/PokemonHome";
import Navbar from "../components/navbar";

function Home(props) {
    return <div>
        <Navbar />
        <h1>Attrappez les pokemons sauvages</h1>
        <PokemonHome/>
    </div>
}

export default Home;


