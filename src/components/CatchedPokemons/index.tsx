import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPending, getPokemons } from '../../redux/pokemons.selector';
import { Grid } from '@material-ui/core';
import PokemonCard from '../PokemonCard';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import { loadPokemonsAction } from '../../redux/pokemons.action';


const CatchedPokemons:React.FC = (): JSX.Element =>  {
    const allPokemons = useSelector(getPokemons);
    const pending = useSelector(getPending)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPokemonsAction({_limit: 1000}))
    }, [])

    const catchedPokemons = React.useMemo(() => {
        if(allPokemons) return allPokemons.filter((item) => item.isCatched )
    }, [allPokemons])

    return (
        <>
            {pending && (
                <LinearProgress color="secondary" />
            )}
            <Grid container spacing={3}>
                {catchedPokemons && (
                    catchedPokemons.map((item, ind) => {
                        return (
                            <Grid item lg={4} md={6} xs={12} key={ind}>
                                <PokemonCard item={item}/>
                            </Grid>
                        )
                    })
                )}
            </Grid>
        </>
    );
}

export default CatchedPokemons;