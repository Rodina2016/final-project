import { createStore } from 'redux-dynamic-modules';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';
import { loadPokemons } from './redux/pokemons.reducer';

const initialState = {};

const store = createStore({
    initialState,
    extensions: [
        getThunkExtension()
    ]
}, {
    id: 'app',
    reducerMap: {
        loadPokemons
    } as any
});

export default store;
