import { getAll } from "../api/pokemons";
import { addToPokedex } from "../api/pokemons";

function PokemonHome(useState, useEffect) {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const gotchapokemon = getAll();
        setPokemons(gotchapokemon);
    }, [])
    return <div className="pokemon-list">
        <div class="flex">
            {
                pokemons.map((pokemon, key) => {
                    return <div key={key} className="bloc-pokemon">
                        {/* <img className="avatar" src={pokemon.img} /> */}
                        <h2>{pokemon._id}</h2>
                        <button onClick={() => addToPokedex(pokemon.name)}>Capturer !</button>
                    </div>
                })
            }
        </div>
    </div>;
};

export default PokemonHome;