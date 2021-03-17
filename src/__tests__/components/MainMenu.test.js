import React from 'react';
import MainMenu from '../../components/MainMenu';
import 'regenerator-runtime/runtime';
import renderer from 'react-test-renderer';

test("main menu snapShot", () => {
    const component = renderer.create(
        <MainMenu/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})