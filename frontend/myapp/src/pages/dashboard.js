import Navbar from "../components/navbar";
import { Dashboardpoke } from "../components/dashboardpoke";

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