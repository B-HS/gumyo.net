'use client'
import Detail from '@/components/main/detail'
import Introduce from '@/components/main/introduce'
import Keywordsstudios from '@/components/main/keywordsstudios'
import Prosoft from '@/components/main/prosoft'
import Stack from '@/components/main/stack'
import PageLayout from '@/components/transition/page'
import Section from '@/components/transition/section'
import { Box, Flex, Heading } from '@chakra-ui/react'

const Home = () => (
    <PageLayout>
        <Introduce />
        <Flex flexDir={'column'} gap={3}>
            <Detail />
            <Stack />
            <Section delay={1}>
                <Flex alignItems={'center'} w={'full'} flexDir={'column'}>
                    <Heading size={'lg'}>History</Heading>
                    <Box>
                        <Prosoft />
                        <Keywordsstudios />
                    </Box>
                </Flex>
            </Section>
        </Flex>
    </PageLayout>
)

export default Home
