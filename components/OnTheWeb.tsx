/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from 'react';
import { Box, Heading, Flex, Button, Text } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

function OnTheWeb(): ReactElement {
  return (
    <Box w='100%'>
      <Heading
        display='inline-block'
        borderBottom='1px'
        borderBottomWidth='6px'
        borderColor='#B3E5FC'
        as='h3'
        size='lg'>
        On The Web
      </Heading>
      <Box mt={3}>
        <ul style={{ listStyle: 'none' }}>
          <li>
            {' '}
            <Button colorScheme='teal' variant='ghost'>
              <a href='https://github.com/karamanmertcan' target='blank'>
                <Flex align='center'>
                  <AiFillGithub />
                  <Text ml={2}>@karamanmertcan</Text>
                </Flex>
              </a>
            </Button>
          </li>
          <li>
            {' '}
            <Button colorScheme='teal' variant='ghost'>
              <a href='https://www.linkedin.com/in/mertcankaraman' target='blank'>
                <Flex align='center'>
                  <AiFillLinkedin />
                  <Text ml={2}>@mertcankaraman</Text>
                </Flex>
              </a>
            </Button>
          </li>
          <li>
            {' '}
            <Button colorScheme='teal' variant='ghost'>
              <a href='https://www.instagram.com/karaman_mertcan/' target='blank'>
                <Flex align='center'>
                  <AiFillInstagram />
                  <Text ml={2}>@karaman_mertcan</Text>
                </Flex>
              </a>
            </Button>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default OnTheWeb;
