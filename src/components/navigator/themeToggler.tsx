import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Icon, useColorMode, useColorModeValue } from '@chakra-ui/react'

const Toggler = () => {
    const { toggleColorMode } = useColorMode()
    return (
        <Icon aria-label='Toggle theme' onClick={toggleColorMode}>
            {useColorModeValue(<MoonIcon />, <SunIcon />)}
        </Icon>
    )
}

export default Toggler
