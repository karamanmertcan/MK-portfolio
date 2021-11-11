import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { Box, Container, Heading, Button, Avatar, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { groq } from 'next-sanity';
import { getClient } from '../../client';
import { serializers } from '../../lib/serializers';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

interface Props {}

const query = `*[_type == "blog" && slug.current == $slug][0]{
    title,
    excerpt,
    date,
    author,
    mainImage,
    body,
    "slug" : slug.current,
    mainImage{
      asset->{
        id,
        url
      },
      alt
    }
  }`;

const BlogPage: React.FC<{
  currentPost: any;
}> = ({ currentPost }) => {
  const router = useRouter();

  const minRead = Math.ceil(currentPost?.body.length / 20);

  return (
    <Layout>
      <Container>
        <Box pt={40} h='auto'>
          <Heading as='h3' size='lg' textAlign='center' color='#008CC9'>
            {currentPost?.title}
          </Heading>
          <Box mt={3}>
            <Button
              w='100%'
              bg='#008CC9'
              color='#fff'
              onClick={() => router.push('/blog')}>{`<= Back to the all posts`}</Button>
          </Box>
          <Box w='100%' mt={5}>
            <Flex align='center'>
              <Avatar size='md' name='Mertcan Karaman' src='/linkedinpp.png' />
              <Text ml={3} style={{ fontWeight: 'bold' }}>
                {currentPost?.author}
              </Text>
              <Text ml={3}>{currentPost?.date}</Text>
              <Text color='#008CC9' ml={3}>
                {minRead} min read
              </Text>
            </Flex>
          </Box>
          <Box w='100%' height='auto' mt={10}>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ ease: 'easeIn', duration: 0.8 }}>
              <Box w='100%' h='300px'>
                <BlockContent
                  blocks={currentPost?.body}
                  dataset='production'
                  serializers={serializers}
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ params, preview = false }: any) {
  const currentPost = await getClient(preview).fetch(query, {
    slug: params.slug
  });

  return {
    props: {
      currentPost
    }
  };
}

export const getStaticPaths = async () => {
  const pages = await getClient().fetch(
    groq`*[_type == "blog" && defined(slug.current)][].slug.current`
  );

  return {
    paths: pages.map((slug: any) => `/blog/${slug}`),
    fallback: true
  };
};

export default BlogPage;
