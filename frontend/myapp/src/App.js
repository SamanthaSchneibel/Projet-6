import Home from "./pages/Home";
import PokedexPage from "./pages/PokedexPage";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App(){
  return <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Pokedex">
          <PokedexPage />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>
  </Router>
}

export default App;
