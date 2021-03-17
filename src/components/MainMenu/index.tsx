import { NavLink, Router } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import styles from './MainMenu.styles';
import React from 'react';
import Container from '@material-ui/core/Container/Container';
import { MainMenuProps } from '../../types';
import history from '../../history';

const useStyles = makeStyles(styles, {
    name: 'MainMenu'
});

const MainMenu: React.FC<MainMenuProps> = (props): JSX.Element => {
    const classes = useStyles(props);

    return (
        <Router history={history}>
            <div className={classes.root}>
                <Container maxWidth={'md'}>
                    <div className={classes.wrap}>
                        <div className={classes.item}>
                            <NavLink to="/" className={classes.link}>
                                Main
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/catched-pokemons" className={classes.link}>
                                Catched pokemons
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </div>
        </Router>
    );
};

export default MainMenu;