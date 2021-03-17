import { stringify } from "query-string";

export async function getAllPokemons(query: {_page: string | undefined, _limit: string | undefined}) {
    let apiUrl = `http://localhost:8080/pokemons`
    if(query) {
        const apiQuery = {
            '_page': query._page || undefined,
            '_limit': query._limit || 10,
        };
        apiUrl += '?' + stringify(apiQuery);
    }
    const res = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        cache: 'no-store'
    })
    const payload = await res.json()
    if (res.ok) {
        return payload
    } else {
        return Promise.reject(payload)
    }
}

export async function getPokemonById(id?:string) {
    const res = await fetch(`http://localhost:8080/pokemons/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        cache: 'no-store'
    })
    const payload = await res.json()
    if (res.ok) {
        return payload
    } else {
        return Promise.reject(payload)
    }
}

export async function postCatchStatus(id:number, isCatched: boolean, date: Date) {
    const res = await fetch(`http://localhost:8080/pokemons/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            isCatched: isCatched,
            dataCatched: date
        })
    })
    const payload = await res.json()
    if (res.ok) {
        return payload
    } else {
        return Promise.reject(payload)
    }
}