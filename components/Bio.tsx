/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';

function Bio(): ReactElement {
  return (
    <Box w='100%'>
      <Heading
        display='inline-block'
        borderBottom='1px'
        borderBottomWidth='6px'
        borderColor='#B3E5FC'
        as='h3'
        size='lg'>
        Bio
      </Heading>
      <Box mt={5}>
        <Flex>
          <Text fontWeight='bold'>2000</Text>
          <Text ml={5}>Born in Istanbul, Turkey.</Text>
        </Flex>
      </Box>
      <Box mt={1}>
        <Flex>
          <Text fontWeight='bold'>2018</Text>
          <Text ml={5}>Graduated from Istek Vakfı Atanuroğuz Fen Lisesi.</Text>
        </Flex>
      </Box>
      <Box mt={1}>
        <Flex>
          <Text fontWeight='bold'>2018</Text>
          <Text ml={5}>Started Kadir Has University, Computer Engineering Department</Text>
        </Flex>
      </Box>
      <Box mt={1}>
        <Flex>
          <Text fontWeight='bold'>2021</Text>
          <Text ml={5}>Started to work at LetWOM Company as a Software Developer</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Bio;
