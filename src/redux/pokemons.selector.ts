import { PokemonType } from "../types"

export interface IPokemonState {
    loadPokemons: {
        pokemonsList: PokemonType[],
        pending: boolean
    }
}

export function getPokemons(state: IPokemonState) {
    return state.loadPokemons.pokemonsList
}

export function getPending(state: IPokemonState) {
    return state.loadPokemons.pending
}