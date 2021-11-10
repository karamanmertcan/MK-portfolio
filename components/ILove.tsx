/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';

function ILove(): ReactElement {
  return (
    <Box w='100%'>
      <Heading
        display='inline-block'
        borderBottom='1px'
        borderBottomWidth='6px'
        borderColor='#B3E5FC'
        as='h3'
        size='lg'>
        I ❤️
      </Heading>
      <Box mt={3}>
        <Text> Music, Formula 1, Playing Games, Soccer, Javascript, React</Text>
      </Box>
    </Box>
  );
}

export default ILove;
