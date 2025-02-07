const pokemonsState = {
    pokemonsList: null,
    pending: false
}

type actionType = {
    type: string,
    status: string,
    payload: [
        {name: string, id: number}
    ]
}

export const loadPokemons = (state = pokemonsState, action: actionType) => {
    switch (action.type) {
        case 'LOAD_POKEMONS': {
            switch (action.status) {
                case 'pending': {
                    return {
                        ...state,
                        pending: true
                    }
                }
                case 'success': {
                    return {
                        ...state,
                        pokemonsList: action.payload,
                        pending: false
                    }
                }
                case 'failure': {
                    return {
                        ...state,
                        pokemonsList: null,
                        pending: false
                    }
                }
                default: {
                    return state
                }
            }
        }
        default: {
            return state
        }
    }
}