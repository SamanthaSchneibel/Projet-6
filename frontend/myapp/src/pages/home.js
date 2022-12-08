import PokemonHome from "../components/PokemonHome";
import Navbar from "../components/Navbar";

function Home(props) {
    return <div>
        <Navbar />
        <h1>Attrappez les tous !</h1>
        <h2>{PokemonHome}</h2>
    </div>
}

export default Home;


