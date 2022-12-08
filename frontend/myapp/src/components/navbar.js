import { Link } from "react-router-dom";
 
function Navbar(){
    return <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/Pokedex">Pokedex</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
        </ul>
    </nav>
}
export default Navbar;