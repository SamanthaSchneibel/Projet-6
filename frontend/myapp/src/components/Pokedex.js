import { useEffect, useState } from "react";
import { getAll } from "../api/pokedexapi"

function Pokedex() {
    const [setPokedex] = useState([]);
    useEffect(() => {
        const addToPokedex = getAll();
        setPokedex(addToPokedex);
    })
    return <h1>Pokedex</h1>
};

export default Pokedex;