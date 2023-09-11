import { Badge, Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../transition/section'

const Stack = () => (
    <Section delay={0.7}>
        <Flex alignItems={'center'} flexDir={'column'}>
            <Flex>
                <Heading size={'lg'}>Skills / Toy Projects</Heading>
            </Flex>
            <Flex mt={3} flexWrap={'wrap'} justifyContent={'space-between'} gap={3}>
                <Box>
                    <Text fontWeight={'bold'}>
                        • <Badge>Language</Badge>
                    </Text>
                    <Text ml={2}> - Typescript, Javascript, Java, Python</Text>
                </Box>
                <Box>
                    <Text fontWeight={'bold'}>
                        • <Badge>Front-End</Badge>
                    </Text>
                    <Text ml={2}> - React(Nextjs), Vue(3/2), Svelte(SvelteKit)</Text>
                </Box>
                <Box>
                    <Text fontWeight={'bold'}>
                        • <Badge>Back-End</Badge>
                    </Text>
                    <Text ml={2}> - Spring boot(~3.x.x), Nestjs</Text>
                </Box>
                <Box>
                    <Text fontWeight={'bold'}>
                        • <Badge>ETC.</Badge>
                    </Text>
                    <Text ml={2}> - Electron, MYSQL/MARIADB, RHEL/Ubuntu</Text>
                </Box>
                <Box>
                    <Flex alignItems={'baseline'} gap={1}>
                        <Text fontWeight={'bold'}>
                            • <Badge>Toy Projects</Badge>
                        </Text>
                        <Text fontSize={'2xs'}>(클릭시 Github로 이동)</Text>
                    </Flex>
                    <Text ml={2}>
                        - <Link href={'https://github.com/B-HS/Burrency'}>Burrency</Link>,
                        <Link href={'https://github.com/B-HS/Naver_Webtoon_Bookmarker'}> 네이버 웹툭북마커</Link>,
                        <Link href={'https://github.com/B-HS/BBlog'}> BBLOG</Link> ...
                    </Text>
                    <Text ml={2}>
                        <Link as={NextLink} href={'/portfolio'}>
                            - 포트폴리오로 이동
                        </Link>
                    </Text>
                </Box>
            </Flex>
        </Flex>
    </Section>
)

export default Stack
