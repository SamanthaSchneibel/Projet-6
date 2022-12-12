import { Createpoke } from "../components/dashboardpoke";

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

export const updatepokemonDash = async (pokemon, newname) => {
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

export const postpokemonDash = async (Createpoke) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/post', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        , body: JSON.stringify({
            'num': Createpoke.num,
            'name': Createpoke.name,
            'type': Createpoke.type,
            'img1': Createpoke.img1,
            'img2': Createpoke.img2,
            'description': Createpoke.description
        })
    }
    )
    const pokemons = await response.json()
    return pokemons
}

