import Navbar from "../components/navbar";
import { Dashboardpoke } from "../components/dashboardpoke";

function Dashboard(){
    return <div><Navbar/>
    <h1>Dashboard</h1>
    <h2>Modifiez les pokemons !</h2>
    <Dashboardpoke/>
    </div>;
}
export default Dashboard;