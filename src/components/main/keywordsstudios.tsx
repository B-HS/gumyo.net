import { Box, Flex, Text } from '@chakra-ui/react'

const Keywordsstudios = () => (
    <>
        <Text fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'} pt={2}>
            Keywords Studios Tokyo
        </Text>
        <Text fontSize={'lg'} fontWeight={'bold'} textAlign={'center'}>
            LQA/QA Testing @Tokyo, Japan
        </Text>
        <Text ml={1} as='u' textUnderlineOffset={3}>
            📅 2019.07 - 2022.01
        </Text>

        <Flex mt={3} flexWrap={'wrap'} justifyContent={'space-between'}>
            <Box>
                <Text ml={4} fontWeight={'bold'}>
                    • 이하의 게임 테스팅 및 출시 완료
                </Text>
                <Text ml={6}> - 브레이브리 디폴트 II(스위치/스팀), XLOG(CMS)</Text>
                <Text ml={6}> - 니어 리[인]카네이션, FFBE WOTV</Text>
                <Text ml={6}> - 디지몬 리얼라이즈, 소드아트 온라인 엘리시제이션</Text>
                <Text ml={6}> - 악마성 그리모어오브 소울즈 등</Text>
            </Box>
            <Box>
                <Text ml={4} fontWeight={'bold'}>
                    • 이하의 게임 온고잉 테스트 참여
                </Text>
                <Text ml={6}> - FFBE, FFBE WOTV</Text>
            </Box>
        </Flex>
    </>
)

export default Keywordsstudios
