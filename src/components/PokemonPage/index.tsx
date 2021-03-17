import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import Typography from '@material-ui/core/Typography/Typography';
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonById } from '../../resources';
import { PokemonPageProps, PokemonType } from '../../types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import styles from './PokemonPage.styles';

const useStyles = makeStyles(styles, {
    name: 'PokemonPage'
});

const PokemonPage:React.FC<PokemonPageProps> = (props): JSX.Element => {
    const classes = useStyles(props)
    const { id: currentId } = useParams<{id?:string}>()
    const [pokemon, setPokemon] = useState<PokemonType | null>(null)
    const [pending, setPending] = useState(false)

    useEffect(() => {
        setPending(true)
        getPokemonById(currentId)
            .then((res) => {
                if(res) {
                    setPokemon(res)
                    setPending(false)
                }
            })
            .catch((error) => {
                setPending(false)
            })
    }, [])

    const dateCatched = useMemo(() => {
        if(pokemon?.dataCatched) {
            return new Date(pokemon?.dataCatched)
        }
    }, [pokemon])

    return (
        <>
            {pokemon && (
                <>
                    <Typography variant={'h1'} className={classes.heading}>{pokemon.name}</Typography>
                    {pokemon.isCatched && (
                        <Typography variant={'body1'}>
                            <span style={{color: '#acacac'}}>Catched: </span>
                            {dateCatched?.toDateString()}
                        </Typography>
                    )}
                   <img src={`/images/${pokemon.id}.png`} className={classes.img}/>
                </>
            )}
            {pending && (
                <LinearProgress color="secondary" />
            )}
        </>
    );
}

export default PokemonPage

