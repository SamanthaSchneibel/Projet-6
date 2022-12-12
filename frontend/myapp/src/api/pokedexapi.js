export const addedpokemon = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedex/get', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const pokemons = await response.json()
    return pokemons
}

export const updatepokemon = async (pokemon, newname) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/update', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        , body: JSON.stringify({
            '_id': pokemon._id,
            'name': document.getElementById(newname).value
        })
    }
    )
    const pokemons = await response.json()
    return pokemons
}

export const deletepokemon = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/delete', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        // , body: JSON.stringify({
        //     '_id': pokemon._id,
        // })
    }
    )
    const pokemons = await response.json()
    return pokemons
}
