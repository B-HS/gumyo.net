import { Flex, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import UpdownAnime from '../transition/updown'

import Fonts from '../font'

export const LeftNav = () => (
    <UpdownAnime>
        <Fonts />
        <Flex display={'flex'} alignItems={'baseline'} gap={2}>
            <Flex alignItems={'baseline'}>
                <Link as={NextLink} fontSize={'3xl'} fontWeight={'bold'} href={'/'}>
                    Hynseok
                </Link>
                <Text fontSize={'2xs'}>v3.5</Text>
            </Flex>
        </Flex>
    </UpdownAnime>
)
