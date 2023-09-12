import { Link } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { FaGithub, FaLayerGroup, FaUserLarge } from 'react-icons/fa6'
import { SiMisskey, SiTistory } from 'react-icons/si'

const Toggler = dynamic(() => import('@/components/navigator/themeToggler'), { ssr: false })

export const MENU_ICONS = [
    {
        name: 'github',
        icon: (
            <Link href='https://github.com/B-HS'>
                <FaGithub />
            </Link>
        ),
        order: 2,
    },
    {
        name: 'misskey',
        icon: (
            <Link href='https://mi.gumyo.net'>
                <SiMisskey />
            </Link>
        ),
        order: 3,
    },
    {
        name: 'tistory',
        icon: (
            <Link href='https://hbyun.tistory.com'>
                <SiTistory />
            </Link>
        ),
        order: 3,
    },
    {
        name: 'toggler',
        icon: <Toggler />,
        order: 6,
    },
    {
        name: 'user',
        icon: (
            <Link as={NextLink} href='/'>
                <FaUserLarge />
            </Link>
        ),
        path: '/',
        order: 0,
    },
    {
        name: 'portfolio',
        icon: (
            <Link as={NextLink} href='/portfolio'>
                <FaLayerGroup />
            </Link>
        ),
        path: '/portfolio',
        order: 1,
    },
].sort((a, b) => (a.order > b.order ? 1 : -1))
