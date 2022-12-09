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

