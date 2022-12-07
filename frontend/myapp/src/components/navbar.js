import { Link } from "react-router-dom";
 
function Menu(props){
    return <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/About">Pokedex</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
        </ul>
    </nav>
}
export default Menu;