import React, { ReactElement } from 'react';
import { Box, Container, Image, Text, Heading, Button, useColorModeValue } from '@chakra-ui/react';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import sanityClient from '../client';

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
            {data.map((post: Post, index) => (
              <PostItem
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                mainImage={post.mainImage.asset.url}
                target={post.target}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await sanityClient.fetch(`*[_type == "post"]{
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
