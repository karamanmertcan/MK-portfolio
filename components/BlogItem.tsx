import React, { ReactElement } from 'react';
import { Box, useColorModeValue, Image, Text, Heading, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface Props {
  title: String;
  excerpt: String;
  target: String;
  mainImage: String;
  slug: String;
}

const PostItem: React.FC<Props> = (props): JSX.Element => {
  const router = useRouter();
  return (
    <Box
      boxShadow='2xl'
      borderRadius='20px'
      bg={useColorModeValue('#B3E5FC', '#202023')}
      h='auto'
      mt={10}
      pb={10}
      w='100%'
      style={{ overflow: 'hidden' }}>
      <Image src={`${props.mainImage}`} w='100%' alt='image' />
      <Heading as='h4' size='md' px={4} pt={6}>
        {props.title}
      </Heading>
      <Text p={4}>{props.excerpt}</Text>
      <Box p={4}>
        <Button onClick={() => router.push(`/blog/${props.slug}`)}>
          <a>Read</a>
        </Button>
      </Box>
    </Box>
  );
};

export default PostItem;
