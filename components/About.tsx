/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from 'react';
import Link from 'next/link';
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
        Hi. My name is Mertcan and I'm a fullstack developer and computer engineering student from
        Turkey. I'm studying at Kadir Has University. My favorite technologies right now are:
        React.js, Next.js, Typescript, Javascript, Node.js, and MongoDB. I'm working at LetWOM
        company as a fullstack developer right now. I'm trying to improve myself everyday. I'm
        trying to learn new technologies about to web development.
      </Text>
      <a href='/MertcanKaramanCVNewVersion.pdf' target='_blank'>
        <Button colorScheme='blue' w='100%'>
          <i className='fas fa-download' />
          My Resume
        </Button>
      </a>
    </Box>
  );
}

export default About;
