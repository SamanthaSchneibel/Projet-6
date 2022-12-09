export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/get', {
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

export const addToPokedex = async () => {
    const responsePoke = await fetch(
        'http://localhost:4444/pokedex/post', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const pokemonadd = await responsePoke.json()
    return pokemonadd
}
