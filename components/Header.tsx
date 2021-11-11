import React from 'react';
import { Container, Box, Flex, Spacer, Text, useColorModeValue } from '@chakra-ui/react';
import ToggleButton from './theme-toggle-button';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  return (
    <Box w='100%' pos='fixed' p={4} color='white' bg={useColorModeValue('#ffffff40', '#20202380')}>
      <Container maxW='container.lg'>
        <Flex align='center'>
          <Box>
            <Flex align='center' color={useColorModeValue('black', 'white')}>
              <Link href='/'>
                <Text style={{ fontWeight: 'bold', cursor: 'pointer' }}>Mertcankaraman.</Text>
              </Link>
              {router.pathname.split('/')[1] === 'works' ? (
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ ease: 'easeIn', duration: 0.2 }}>
                  <Box ml={5} bg={`${router.pathname.split('/')[1] ? '#b3e5fc' : null}`} p={2}>
                    <Link href='/works'>
                      <a>Works</a>
                    </Link>
                  </Box>
                </motion.div>
              ) : (
                <Box ml={5} p={2}>
                  <Link href='/works'>
                    <a>Works</a>
                  </Link>
                </Box>
              )}

              {router.pathname.split('/')[1] === 'blog' ? (
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ ease: 'easeIn', duration: 0.2 }}>
                  <Box ml={5} bg={`${router.pathname.split('/')[1] ? '#b3e5fc' : null}`} p={2}>
                    <Link href='/blog'>
                      <a>Blog</a>
                    </Link>
                  </Box>
                </motion.div>
              ) : (
                <Box ml={5} p={2}>
                  <Link href='/blog'>
                    <a>Blog</a>
                  </Link>
                </Box>
              )}
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
