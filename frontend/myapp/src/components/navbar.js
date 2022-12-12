import { Link } from "react-router-dom";
 
function Navbar(){
    return <nav id="nav-wrapper" class="grey darken-4">
            <a><Link to="/" class="brand-logo center">Attrappez les tous !</Link></a>
            <ul class="left">
                <li><Link to="/Pokedex">Pokedex</Link></li>
            </ul>
            <ul class="right">
                <li><Link to="/Dashboard">Dashboard</Link></li>
            </ul>
        </nav>
}
export default Navbar;