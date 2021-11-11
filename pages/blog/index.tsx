import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { getClient } from '../../client';
import BlogItem from '../../components/BlogItem';
import Layout from '../../components/Layout';

interface Props {
  data: [];
}

interface Blog {
  title: String;
  excerpt: String;
  date: String;
  slug: String;
  author: String;
  mainImage: {
    asset: {
      url: String;
    };
  };
  body: any;
}

const groq = `*[_type == "blog"]{
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

const BlogPage = ({ data }: Props) => {
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
            Posts
          </Heading>
          <Box w='100%' height='auto' mt={10}>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ ease: 'easeIn', duration: 0.8 }}>
              {data.map((item: Blog, index) => (
                <BlogItem
                  key={index}
                  title={item.title}
                  excerpt={item.excerpt}
                  date={item.date}
                  slug={item.slug}
                  author={item.author}
                  mainImage={item.mainImage.asset.url}
                  body={item.body}
                />
              ))}
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getClient().fetch(groq);
  return {
    props: { data },
    revalidate: 1
  };
}

export default BlogPage;
