import Fonts from '@/components/font'
import Navigator from '@/components/navigator/navigator'
import { Container } from '@chakra-ui/react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'
import './globals.sass'
import Providers from './providers'

const Background = dynamic(() => import('@/components/three/background'), { ssr: false })
export const metadata: Metadata = {
    title: 'HS :: Home',
    description: 'Bblog',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang='ko'>
            <Fonts />
            <body>
                <Background />
                <Providers>
                    <Navigator key={'nav'} />
                    <Container maxW={'container.md'} key={'container'} pt={'5rem'} minH='100vh'>
                        {children}
                    </Container>
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout
