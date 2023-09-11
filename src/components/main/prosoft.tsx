import { Box, Flex, Text } from '@chakra-ui/react'

const Prosoft = () => (
    <>
        <Text fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'} pt={2}>
            Prosoft @Changewon
        </Text>
        <Text fontSize={'lg'} fontWeight={'bold'} textAlign={'center'}>
            Web Developer @S.Korea
        </Text>
        <Flex mt={3} flexWrap={'wrap'} justifyContent={'space-between'} gap={3}>
            <Box>
                <Text ml={1} as='u' textUnderlineOffset={3}>
                    📅 2023.09 -
                </Text>
                <Text ml={2} fontWeight={'bold'}>
                    • 프레임워크 고도화, 레거시 시스템 마이그레이션{' '}
                </Text>
                <Text ml={4}> - 자사 프레임워크 고도화, 레거시 프로젝트 전환</Text>
            </Box>

            <Box>
                <Text ml={1} as='u' textUnderlineOffset={3}>
                    📅 2023.04 - 09
                </Text>
                <Text ml={2} fontWeight={'bold'}>
                    • 자사 프레임워크 AA 및 넥사크로 to vue3 변환작업
                </Text>
                <Text ml={4}> - 프레임워크 공통설계/개발, 개발 가이드/문서 작성</Text>
                <Text ml={4}> - 작성된 프레임워크를 이용하여 넥사크로 전체 이전작업</Text>
            </Box>
            <Box>
                <Text ml={1} as='u' textUnderlineOffset={3}>
                    📅 2023.03 - 04
                </Text>
                <Text ml={2} fontWeight={'bold'}>
                    • ORACLE to MARIADB Miragtion
                </Text>
                <Text ml={4}> - 기존 ORACLE 문법으로 작성된 SQL문을 </Text>
                <Text ml={4}> - ANSI 표준에 맞춰 전체 이관 </Text>
            </Box>
        </Flex>
    </>
)

export default Prosoft
