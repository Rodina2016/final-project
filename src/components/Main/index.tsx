import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPending, getPokemons } from '../../redux/pokemons.selector';
import { Grid } from '@material-ui/core';
import PokemonCard from '../PokemonCard';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import TablePagination from '@material-ui/core/TablePagination/TablePagination';
import { useHistory, useLocation } from 'react-router-dom';
import { loadPokemonsAction } from '../../redux/pokemons.action';
import { postCatchStatus } from '../../resources';
import { parse, stringify } from 'query-string';

export default function Main(): JSX.Element {
    const allPokemons = useSelector(getPokemons);
    const pending = useSelector(getPending)
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()

    const [query, setQuery] = React.useState({})
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    React.useEffect(() => {
        dispatch(loadPokemonsAction(query))
    }, [query])

    const urlQuery = React.useMemo(() => {
        return parse(location.search)
    }, [
        location.search,
    ])

    React.useEffect(() => {
        setQuery(urlQuery)
        if(urlQuery?._page) setPage(+urlQuery?._page)
        if(urlQuery?._limit) setRowsPerPage(+urlQuery?._limit)
    }, [ urlQuery ])

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
        history.push(`${location.pathname}?${stringify({ ...query, _page: newPage})}`);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
        history.push(`${location.pathname}?${stringify({_limit: parseInt(event.target.value, 10)})}`);
    };

    const handleCatchPokemon = (id:number) => {
        postCatchStatus(id, true, new Date())
            .then((res) => {
                if(res) {
                    dispatch(loadPokemonsAction(query))
                }
            })
    }

    return (
        <>
            {pending && (
                <LinearProgress color="secondary" />
            )}
            <Grid container spacing={3}>
                {allPokemons && (
                    <>
                        {
                            allPokemons.map((item, ind) => {
                                return (
                                    <Grid item lg={4} md={6} xs={12} key={ind}>
                                        <PokemonCard item={item} catchPokemon={handleCatchPokemon}/>
                                    </Grid>
                                );
                            })
                        }
                        <Grid item lg={12}>
                            <TablePagination
                                component="div"
                                count={720}
                                page={page}
                                onChangePage={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                labelRowsPerPage={''}
                            />
                        </Grid>
                    </>
                )}
            </Grid>
        </>
    );
}