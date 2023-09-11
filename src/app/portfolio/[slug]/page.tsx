import { post as posts } from '@/components/posts/posts'
import PageLayout from '@/components/transition/page'
import { Badge, Box, Divider, Flex, Heading, IconButton, Img, Link, Text, Tooltip } from '@chakra-ui/react'
import dayjs from 'dayjs'
import NextLink from 'next/link'
import { FaGithub, FaHouseChimney } from 'react-icons/fa6'

const Page = ({ params }: { params: { slug: string } }) => {
    const post = posts.find((val) => val.pid === params.slug)
    if (!post) {
        window.location.href = '/404'
    }
    return (
        <PageLayout>
            {post && (
                <>
                    <Flex alignItems={'baseline'} gap={3} justifyContent={'space-between'} px={1}>
                        <Heading size={'lg'}>
                            <Link as={NextLink} href='/portfolio'>
                                ←
                            </Link>
                            {post.title}
                        </Heading>
                        <Flex gap={2} alignItems={'center'}>
                            {post.from && <Text fontSize={'xs'}>{dayjs(post.from).format('YYYY  MM DD')}</Text>}
                            <Text> - </Text>
                            {post.to && <Text fontSize={'xs'}>{dayjs(post.to).format('YYYY MM DD')}</Text>}
                        </Flex>
                    </Flex>
                    <Divider mb={5} mt={2} borderWidth={'1px'} borderColor={'gray.500'} />
                    <Box px={3}>
                        <Img src={post.thumbnail.replace('.', '')} mb={3} />
                        <Text as='p' dangerouslySetInnerHTML={{ __html: post.description }}></Text>
                    </Box>
                    <Divider mt={7} mb={3} borderWidth={'1px'} borderColor={'gray.500'} />
                    <Box px={3} mb={10}>
                        <Flex gap={3}>
                            {post.github && (
                                <Tooltip label='Github로 이동'>
                                    <IconButton as='a' href={post.github} aria-label='Github' icon={<FaGithub />} />
                                </Tooltip>
                            )}
                            {post.link && (
                                <Tooltip label='배포사이트로 이동'>
                                    <IconButton as='a' href={post.link} aria-label='Website' icon={<FaHouseChimney />} />
                                </Tooltip>
                            )}
                        </Flex>

                        <Flex mt={3} gap={3} alignItems={'baseline'}>
                            {post.stack.map((tag) => (
                                <Badge p={3} key={tag} rounded={'md'}>
                                    {tag}
                                </Badge>
                            ))}
                        </Flex>
                    </Box>
                </>
            )}
        </PageLayout>
    )
}

export default Page
