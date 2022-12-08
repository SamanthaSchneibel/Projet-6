import { getAll } from "../api/pokedexapi"

export function Pokedex(useState, useEffect) {
    const [setPokedex] = useState([]);
    useEffect(() => {
        const addToPokedex = getAll();
        setPokedex(addToPokedex);
    }, [])
};