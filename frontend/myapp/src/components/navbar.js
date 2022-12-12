import { Link } from "react-router-dom";
 
function Navbar(){
    return <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a><Link to="/" class="navbar-brand">Attrappez les tous !</Link></a>
      <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a><Link to="/Pokedex" class="nav-link left">Pokedex</Link></a>
          <a><Link to="/Dashboard" class="nav-link right">Dashboard</Link></a>
        </div>
      </div>
    </div>
  </nav>
}
export default Navbar;