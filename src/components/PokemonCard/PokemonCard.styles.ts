import { createStyles, Theme } from '@material-ui/core/styles'

export default (theme: Theme) => createStyles({
    root: {
        maxWidth: 345,
        margin: '0 auto',
    },
    media: {
        height: 180,
        backgroundSize: 'contain',
    },
    more: {
        padding: '4px 4px 5px',
        fontSize: 13,
        lineHeight: '23px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: theme.palette.primary.main,

        '&:hover': {
            textDecoration: 'underline'
        }
    }
})