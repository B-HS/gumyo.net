import { Link } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { FaGithub, FaLayerGroup, FaUserLarge } from 'react-icons/fa6'

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
        name: 'toggler',
        icon: <Toggler />,
        order: 3,
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
