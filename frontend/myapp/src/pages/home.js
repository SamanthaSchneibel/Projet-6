import PokemonHome from "../components/PokemonHome";
import Navbar from "../components/navbar";

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Permanent+Marker&family=Press+Start+2P&display=swap" rel="stylesheet" />
</head>

function Home(props) {
    return <div>
        <Navbar />
        <PokemonHome/>
    </div>
}

export default Home;


