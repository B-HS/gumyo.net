import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const hoverStyle = {
    _hover: {
        transform: 'scale(1.01)',
        opacity: 0.5,
        textDecoration: 'none',
    },
    _active: {
        opacity: 0.5,
    },
}

const fonts = {
    heading: "'M PLUS Rounded 1c'",
    body: "'M PLUS Rounded 1c'",
}

const components = {
    Link: {
        baseStyle: () => hoverStyle,
    },
    Button: {
        baseStyle: (props: StyleFunctionProps) => ({
            color: props.colorMode === 'dark' ? 'black' : 'white',
            ...hoverStyle,
        }),
    },
}
const styles = {
    global: (props: StyleFunctionProps) => ({
        root: {
            '--color-cursor': '220, 90, 90',
            '--cursor-outline-shade': '0.3',
            '--cursor-size': '10px',
            '--cursor-outline-size': '12px',
        },
        body: {
            bg: props.colorMode === 'dark' ? 'black' : 'white',
        },
    }),
}

const theme = extendTheme({
    fonts,
    components,
    styles,
})

export default theme
