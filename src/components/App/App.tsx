import React from 'react'
import {Router, Switch, Route} from 'react-router-dom'
import history from '../../history';
import Main from '../Main';
import Container from '@material-ui/core/Container/Container';
import MainMenu from '../MainMenu';
import PokemonPage from '../PokemonPage';
import CatchedPokemons from '../CatchedPokemons';

export default function App() {
    return (
        <>
            <MainMenu/>
            <Container maxWidth='md'>
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/catched-pokemons" exact component={CatchedPokemons}/>
                        <Route path="/pokemons/:id" component={PokemonPage}/>
                    </Switch>
                </Router>
            </Container>
        </>
    )
}