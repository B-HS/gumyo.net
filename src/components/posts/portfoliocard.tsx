import { Badge, Flex, Heading, Img, Link, Tooltip } from '@chakra-ui/react'
import NextLink from 'next/link'
import { POST } from './posts'
const PortfolioCard = ({ post }: { post: POST }) => {
    return (
        <Flex flexDir={'column'} gap={3} key={post.title} alignItems={'center'}>
            <Link as={NextLink} href={post.pid ? '/portfolio/' + post.pid : '/portfolio/'} w='100%' textAlign='center'>
                <Img
                    src={post.thumbnail.replace('.', '')}
                    alt={post.title}
                    placeholder='blur'
                    loading='lazy'
                    h={200}
                    w={'full'}
                    borderRadius={'md'}
                    shadow={'lg'}
                />
            </Link>
            <Heading size={'md'}>{post.title}</Heading>
            <Flex gap={2} flexWrap={'wrap'}>
                {post.stack.length < 5 ? (
                    post.stack.map((post) => <Badge key={post}>{post}</Badge>)
                ) : (
                    <>
                        {post.stack.slice(0, 4).map((post) => (
                            <Badge key={post}>{post}</Badge>
                        ))}
                        <Tooltip label={post.stack.slice(4).join(', ')}>
                            <Badge>...</Badge>
                        </Tooltip>
                    </>
                )}
            </Flex>
        </Flex>
    )
}

export default PortfolioCard
