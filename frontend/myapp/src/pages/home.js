import PokemonHome from "../components/PokemonHome";
import Navbar from "../components/navbar";

function Home(props) {
    return <div>
        <Navbar />
        <div className="container">
            <h1>Capturez les pokemons sauvages</h1>
        </div>
        <PokemonHome/>
    </div>
}

export default Home;


