import { MENU_ICONS } from '@/config/menus'
import { IconButton, Stack } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import UpdownAnime from '../transition/updown'

export const RightNav = () => {
    const pathname = usePathname()
    return (
        <UpdownAnime>
            <Stack flexDir={'row'} gap={{ base: 0, sm: 0, md: '2', lg: '2' }}>
                {MENU_ICONS.map((icon, idx) => (
                    <IconButton variant={'link'} icon={icon.icon} key={idx} aria-label={icon.name} color={icon.path === pathname ? '#58f' : ''} />
                ))}
            </Stack>
        </UpdownAnime>
    )
}
