import { Link } from "react-router-dom";
 
function Navbar(){
    return <nav class="grey darken-4">
            <a href="#!" class="brand-logo center">Attrappez les tous !</a>
            <ul class="left hide-on-med-and-down">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/Pokedex">Pokedex</Link></li>
                <li><Link to="/Dashboard">Dashboard</Link></li>
            </ul>
    </nav>
}
export default Navbar;