import { createStyles, Theme } from '@material-ui/core/styles'

export default (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(2, 0),
        marginBottom: 20,
        backgroundColor: theme.palette.primary.main
    },
    wrap: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    item: {
        marginRight: 20
    },
    link: {
        fontSize: 20,
        color: '#fff',
        textDecoration: 'none',

        '&:hover': {
            opacity: .7,
        }
    }
})