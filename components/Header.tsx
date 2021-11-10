import React from 'react';
import { Container, Box, Flex, Spacer, Text, useColorModeValue } from '@chakra-ui/react';
import ToggleButton from './theme-toggle-button';

const Header = () => {
  return (
    <Box w='100%' pos='fixed' p={4} color='white' bg={useColorModeValue('#ffffff40', '#20202380')}>
      <Container maxW='container.lg'>
        <Flex align='center'>
          <Box>
            <Flex align='center' color={useColorModeValue('black', 'white')}>
              <Text style={{ fontWeight: 'bold' }}>Mertcankaraman.</Text>
              <Text ml={5}>Works</Text>
              <Text ml={5}>Posts</Text>
            </Flex>
          </Box>
          <Spacer></Spacer>
          <Box>
            <ToggleButton />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
