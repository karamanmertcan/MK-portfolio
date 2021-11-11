import React, { ReactElement } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import { getClient } from '../client';

interface Props {
  data: [];
}

interface Post {
  title: string;
  excerpt: string;
  mainImage: {
    asset: {
      url: String;
    };
  };
  target: String;
}

function Works({ data }: Props): ReactElement {
  return (
    <Layout>
      <Container>
        <Box pt={40} h='auto'>
          <Heading
            display='inline-block'
            borderBottom='1px'
            borderBottomWidth='6px'
            borderColor='#B3E5FC'
            as='h3'
            size='lg'>
            Works
          </Heading>
          <Box w='100%' height='auto' mt={10}>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ ease: 'easeIn', duration: 0.8 }}>
              {data.map((post: Post, index) => (
                <PostItem
                  key={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  mainImage={post.mainImage.asset.url}
                  target={post.target}
                />
              ))}
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await getClient().fetch(`*[_type == "post"]{
    title,
    excerpt,
    date,
    target,
    hex,
    mainImage{
      asset->{
        id,
        url
      },
      alt
    }
  }`);

  return {
    props: {
      data
    }
  };
}

export default Works;
