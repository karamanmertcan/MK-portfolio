import React from 'react';
import {
  Container,
  Box,
  Flex,
  Spacer,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react';
import ToggleButton from './theme-toggle-button';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const router = useRouter();
  return (
    <Box w='100%' pos='fixed' p={4} color='white' bg={useColorModeValue('#ffffff40', '#20202380')}>
      <Container maxW='container.lg'>
        <Flex align='center'>
          <Box>
            <Flex align='center' color={useColorModeValue('black', 'white')}>
              <Link href='/'>
                <Text style={{ fontWeight: 'bold', cursor: 'pointer' }}>mertcankaraman.</Text>
              </Link>
              {router.pathname.split('/')[1] === 'works' ? (
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ ease: 'easeIn', duration: 0.2 }}>
                  <Box
                    ml={5}
                    bg={`${router.pathname.split('/')[1] ? '#b3e5fc' : null}`}
                    p={2}
                    display={{ base: 'none', md: 'inline-block' }}>
                    <Link href='/works'>
                      <a>Works</a>
                    </Link>
                  </Box>
                </motion.div>
              ) : (
                <Box ml={5} p={2} display={{ base: 'none', md: 'inline-block' }}>
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
                  <Box
                    ml={5}
                    bg={`${router.pathname.split('/')[1] ? '#b3e5fc' : null}`}
                    p={2}
                    display={{ base: 'none', md: 'inline-block' }}>
                    <Link href='/blog'>
                      <a>Blog</a>
                    </Link>
                  </Box>
                </motion.div>
              ) : (
                <Box ml={5} p={2} display={{ base: 'none', md: 'inline-block' }}>
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
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }} bg='black'>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                _hover={{ bg: 'blue.800' }}
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='primary'
                aria-label='Options'
              />
              <MenuList bg='black'>
                <MenuItem onClick={() => router.push('/works')} _hover={{ bg: '#B3E5FC' }}>
                  Works
                </MenuItem>
                <MenuItem onClick={() => router.push('/blog')} _hover={{ bg: '#B3E5FC' }}>
                  Blog
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
