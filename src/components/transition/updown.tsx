import { useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const UpdownAnime = ({ children }: { children: ReactNode }) => (
    <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
    >
        {children}
    </motion.div>
)
export default UpdownAnime
