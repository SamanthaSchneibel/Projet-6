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

export const updatepokemonnameDash = async (pokemon, newname) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/update', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        , body: JSON.stringify({
            '_id': pokemon._id,
            'newname': document.getElementById(newname).value
        })
    }
    )
    const pokemons = await response.json()
    return pokemons
}

export const deletepokemonDash = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/delete', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        , body: JSON.stringify({
            '_id': pokemon._id
        })
    }
    )
    const pokemons = await response.json()
    return pokemons
}

export const postpokemonDash = async (data) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/post', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        , body: JSON.stringify({
            'num': data.num,
            'name': data.name,
            'type': data.type,
            'type2': data.type2,
            'description': data.description,
            'img1': data.img1,
            'img2': data.img2
        })
    }
    )
    const pokemons = await response.json()
    return pokemons
}

