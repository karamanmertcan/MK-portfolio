import React from 'react';
import { Container, Box, Flex, Spacer, Text, useColorModeValue } from '@chakra-ui/react';
import ToggleButton from './theme-toggle-button';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  // console.log(router.pathname.split('/')[1]);
  return (
    <Box w='100%' pos='fixed' p={4} color='white' bg={useColorModeValue('#ffffff40', '#20202380')}>
      <Container maxW='container.lg'>
        <Flex align='center'>
          <Box>
            <Flex align='center' color={useColorModeValue('black', 'white')}>
              <Text style={{ fontWeight: 'bold' }}>Mertcankaraman.</Text>
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

              {router.pathname.split('/')[1] === 'posts' ? (
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ ease: 'easeIn', duration: 0.2 }}>
                  <Box ml={5} bg={`${router.pathname.split('/')[1] ? '#b3e5fc' : null}`} p={2}>
                    <Link href='/Posts'>
                      <a>Posts</a>
                    </Link>
                  </Box>
                </motion.div>
              ) : (
                <Box ml={5} p={2}>
                  <Link href='/posts'>
                    <a>Posts</a>
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
