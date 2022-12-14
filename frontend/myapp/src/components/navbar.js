import { Link } from "react-router-dom";
 
function Navbar(){
    return <nav>
      <div className="nav-bar">
        <ul>
          <li><Link to="/Pokedex">Pokedex</Link></li>
          <li><Link to="/"><img src="https://www.pngkit.com/png/full/2-20874_pokemon-logo-pokemon-black-and-white-logo.png" alt=""/></Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
        </ul>
      </div>
    </nav>
}
export default Navbar;