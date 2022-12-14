import { Link } from "react-router-dom";
 
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Permanent+Marker&family=Press+Start+2P&display=swap" rel="stylesheet" />
</head>

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