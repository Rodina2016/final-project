import React from 'react';
import MainMenu from '../../components/MainMenu';
import 'regenerator-runtime/runtime';
import renderer from 'react-test-renderer';
import PokemonCard from '../../components/PokemonCard';

test("Pokemon card snapShot", () => {
    const component = renderer.create(
        <PokemonCard/>,
    );


})