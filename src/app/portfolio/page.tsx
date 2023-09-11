'use client'

import PortfolioCard from '@/components/posts/portfoliocard'
import { post } from '@/components/posts/posts'
import PageLayout from '@/components/transition/page'
import Section from '@/components/transition/section'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

const Portfolios = () => {
    return (
        <PageLayout>
            <Box py={5} mb={3}>
                <Heading as='u' textUnderlineOffset={5}>
                    Portfolio
                </Heading>
            </Box>
            <SimpleGrid columns={[1, 2, 2]} gap={10} mx={5} minChildWidth={250} zIndex={10}>
                {post.map((pst, idx) => (
                    <Section delay={idx * 0.25} key={pst.title}>
                        <PortfolioCard post={pst} />
                    </Section>
                ))}
            </SimpleGrid>
        </PageLayout>
    )
}
export default Portfolios
