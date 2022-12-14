import Navbar from "../components/navbar";
import { Dashboardpoke } from "../components/dashboardpoke";

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Permanent+Marker&family=Press+Start+2P&display=swap" rel="stylesheet" />
</head>

function Dashboard() {
    return <div><Navbar />
        <div className="container">
            <h1>Dashboard</h1>
        </div>
        <h2>Modifiez les pokemons !</h2>
        <Dashboardpoke />
    </div>;
}
export default Dashboard;