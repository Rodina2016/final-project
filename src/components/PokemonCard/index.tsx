import Card from '@material-ui/core/Card/Card';
import React from 'react';
import { CardMedia } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Button from '@material-ui/core/Button/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import styles from './PokemonCard.styles';
import { NavLink } from 'react-router-dom';
import { PokemonCardProps } from '../../types';

const useStyles = makeStyles(styles, {
    name: 'PokemonCard'
});

const PokemonCard:React.FC<PokemonCardProps> = (props):JSX.Element => {
    const classes = useStyles(props)
    const {item, catchPokemon} = props

    return (
        <Card className={classes.root} key={item.id}>
            <div>
                <CardMedia
                    className={classes.media}
                    image={`/images/${item.id}.png`}
                    title={item.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                </CardContent>
            </div>
            <CardActions>
                {!item.isCatched && (
                    <Button size="small" color="primary" onClick={() => {
                        if (catchPokemon) {
                            catchPokemon(item.id);
                        }}}>
                        Catch
                    </Button>
                )}
                <NavLink to={`/pokemons/${item.id}`} className={classes.more}>learn more</NavLink>
            </CardActions>
        </Card>
    )
}

export  default PokemonCard