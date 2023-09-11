'use client'
import { Box, Container, HTMLChakraProps } from '@chakra-ui/react'
import { LeftNav } from './leftNav'
import { RightNav } from './rightNav'
const Navigator = (props: HTMLChakraProps<'div'>) => {
    return (
        <Box position='fixed' as='nav' w='100%' css={{ backdropFilter: 'blur(5px)' }} zIndex={2} {...props}>
            <Container display={'flex'} maxW={'container.md'} p={2} alignItems={'baseline'} justifyContent={'space-between'}>
                <LeftNav key={'leftnav'} />
                <RightNav key={'rightnav'} />
            </Container>
        </Box>
    )
}

export default Navigator
