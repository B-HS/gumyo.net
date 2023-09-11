import { Flex, Heading, Image, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Section from '../transition/section'

const Introduce = () => {
    return (
        <Section>
            <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} py={'0.5rem'}>
                <Image
                    src={'https://raw.githubusercontent.com/B-HS/B-HS/main/img/image1.png'}
                    maxW={150}
                    alt='logo'
                    __css={{ filter: useColorModeValue('invert(0)', 'invert(1)') }}
                />
                <Heading>Hyunseok Byun</Heading>
                <Text px={0.5} color={'gray.500'} mb={3}>
                    Coding life, life for coding
                </Text>
                <Flex
                    w={'full'}
                    flexWrap={'wrap'}
                    rowGap={'3'}
                    gap={'5'}
                    justifyContent={{ base: 'center', sm: 'center', md: 'space-evenly', lg: 'space-evenly' }}
                >
                    <Stack lineHeight={'3'} textAlign={'center'}>
                        <Heading size={'md'}>Email</Heading>
                        <Link href='mailto:gumyoincirno@gmail.com'> gumyoincirno@gmail.com </Link>
                        <Link href='mailto:hs@gumyo.net'>hs@gumyo.net</Link>
                    </Stack>
                    <Stack lineHeight={'3'} textAlign={'center'}>
                        <Heading size={'md'}>Homepage</Heading>
                        <Link href='https://hbyun.tistory.com/'> https://hbyun.tistory.com/ </Link>
                        <Link href='https://gumyo.net/'>https://gumyo.net/</Link>
                    </Stack>
                </Flex>
            </Flex>
        </Section>
    )
}

export default Introduce
