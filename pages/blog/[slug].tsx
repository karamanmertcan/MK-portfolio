import React from 'react';
import { Box, Container, Heading, Button, Avatar, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import sanityClient from '../../client';
import { serializers } from '../../lib/serializers';
import Layout from '../../components/Layout';
import BlockContent from '@sanity/block-content-to-react';
import { useRouter } from 'next/router';

interface Props {
  title: String;
  excerpt: String;
  date: String;
  author: String;
  mainImage: String;
  body: any;
}

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

const BlogPage = (props: Props) => {
  const router = useRouter();

  const minRead = Math.ceil(props.body.length / 20);

  console.log(minRead);
  return (
    <Layout>
      <Container>
        <Box pt={40} h='auto'>
          <Heading as='h3' size='lg' align='center' color='#008CC9'>
            {props.title}
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
              <Avatar
                size='md'
                name='Mertcan Karaman'
                src='https://www.mertcankaraman.com/_next/image?url=%2Fimages%2Fmert.jpg&w=640&q=75'
              />
              <Text ml={3} style={{ fontWeight: 'bold' }}>
                {props.author}
              </Text>
              <Text ml={3}>{props.date}</Text>
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
                <BlockContent blocks={props.body} dataset='production' serializers={serializers} />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

BlogPage.getInitialProps = async function (context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query;
  return await sanityClient.fetch(query, { slug });
};

export default BlogPage;
