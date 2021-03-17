import { Dispatch } from 'redux'
import { getAllPokemons } from '../resources'

export function loadPokemonsAction(query: any) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: 'LOAD_POKEMONS',
            status: 'pending'
        })

        try {
            const pokemons = await getAllPokemons(query)
            dispatch({
                type: 'LOAD_POKEMONS',
                status: 'success',
                payload: pokemons
            })
        } catch {
            dispatch({
                type: 'LOAD_POKEMONS',
                status: 'failure',
                payload: null
            })
        }
    }
}