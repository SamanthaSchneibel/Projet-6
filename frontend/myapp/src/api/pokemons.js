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

export const addToPokedex = async (pokemon) => {
    console.log(pokemon)
    const responsePoke = await fetch(
        'http://localhost:4444/pokedex/post', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        ,body: JSON.stringify({
            'img': pokemon.img,
            'num': pokemon.num,
            'name': pokemon.name,
            'type': pokemon.type,
        })
    }
    )
    const pokemonadd = await responsePoke.json()
    return pokemonadd
}
