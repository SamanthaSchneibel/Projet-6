import Navbar from "../components/navbar";
import { Dashboardpoke } from "../components/dashboardpoke";
import { Createpoke } from "../components/dashboardpoke"

function Dashboard(){
    return <div><Navbar/>
    <h1>Dashboard</h1>
    <h2>Modifiez les pokemons !</h2>
    <Dashboardpoke/>
    {/* <Createpoke/> */}
    </div>;
}
export default Dashboard;