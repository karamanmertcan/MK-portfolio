/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

function About(): ReactElement {
  return (
    <Box w='100%'>
      <Heading
        display='inline-block'
        borderBottom='1px'
        borderBottomWidth='6px'
        borderColor='#B3E5FC'
        as='h3'
        size='lg'>
        About
      </Heading>
      <Text mt={5}>
        Hi. My name is Mert and I'm a fullstack developer from Turkey. I've graduaded Sakarya
        University Computer Science in 2021. My favorite technologies right now are: React.js,
        Typescript, GraphQL, Node.js, and MongoDB. My English level is B2. Are you interested in me?
      </Text>
      <Button mt={5} w='100%' colorScheme='blue'>
        <a href='/MertcanKaramanCVNewVersion.pdf' download>
          My Portfolio
        </a>
      </Button>
    </Box>
  );
}

export default About;
