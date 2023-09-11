import { Flex, Heading, Text } from '@chakra-ui/react'
import Section from '../transition/section'

const Detail = () => {
    return (
        <Section delay={0.5}>
            <Flex alignItems={'center'} w={'full'} flexDir={'column'}>
                <Heading size={'lg'}>Introduce</Heading>
                <Flex py={3} px={2} alignItems={'center'} flexDir={'column'}>
                    <Heading size={'md'} as='u' textUnderlineOffset={3} fontWeight={'bold'} pb={2}>
                        언제나 발전하는 코딩을 지향합니다.
                    </Heading>
                    <Text as={'p'}>
                        프론트개발을 좋아하며 실무에서는 Vue3/2 + Pinia/Vuex 취미로는 React/Nextjs + RTK 그리고 Svelte/Sveltekit을 다루고 있습니다.
                        최근에는 데스크탑 어플리케이션에 흥미가 있어서 일렉트론, 가볍게 사용가능한 Nestjs를 다루고 있습니다. 다른 취미로는 일렉기타
                        연주와 풍경 촬영도 좋아하며 일문번역, 그리고 겨울에는 스노우보드를 즐겨탑니다.
                    </Text>
                </Flex>
            </Flex>
        </Section>
    )
}

export default Detail
