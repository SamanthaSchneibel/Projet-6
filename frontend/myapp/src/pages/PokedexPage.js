import Navbar from "../components/navbar";
import Pokedex from "../components/Pokedex";

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Permanent+Marker&family=Press+Start+2P&display=swap" rel="stylesheet" />
</head>

function PokedexPage() {
    return <div><Navbar />
        <Pokedex /> </div>;
}

export default PokedexPage;