import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => {
        return shouldForwardProp(prop) || prop === 'transition'
    },
})

const Section = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
    return (
        <StyledDiv initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay } as any} mb={6}>
            {children}
        </StyledDiv>
    )
}

export default Section
