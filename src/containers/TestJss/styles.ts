export const styles = (theme) => ({
    wrapper: {
        padding: 40,
        background: theme.background,
        textAlign: 'center',
        transition: 'all 0.3s ease',
        height: '100%'
    },
    title: {
        font: {
            size: 40,
            weight: 900
        },
        color: theme.color
    },
    link: {
        color: theme.color,
        '&:hover': {
            opacity: 0.5
        }
    }
})