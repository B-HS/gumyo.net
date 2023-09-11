'use client'
import Section from '@/components/transition/section'
import { Button, Container, Heading } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} h={'50vh'}>
            <Section delay={0.5}>
                <Heading>404 Not Found</Heading>
            </Section>
            <Section delay={1}>
                <Button as='a' href='/'>
                    Go Home
                </Button>
            </Section>
        </Container>
    )
}
export default NotFound
