import {
  Box,
  Container,
  useColorModeValue,
  Avatar,
  Flex,
  Heading,
  Text,
  Spacer
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import EntryTitle from '../components/EntryTitle';
import Layout from '../components/Layout';
import React, { ReactElement } from 'react';
import About from '../components/About';
import Bio from '../components/Bio';
import ILove from '../components/ILove';
import OnTheWeb from '../components/OnTheWeb';

const Home: NextPage = (): ReactElement => {
  return (
    <Layout>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -200, opacity: 0 }}
        transition={{ ease: 'easeIn', duration: 0.8 }}>
        <Container pt='150px' h='auto' p={10}>
          <Box mt={10}>
            <Box
              bg={useColorModeValue('#B3E5FC', '#323234')}
              h='auto'
              p={6}
              w='100%'
              borderRadius='10px'
              justify='center'
              align='center'>
              <EntryTitle />
            </Box>
            <Box mt={10}>
              <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'center' }}>
                <Flex direction='column' align={{ base: 'center', md: 'flex-start' }}>
                  <Heading as='h2' size='xl'>
                    Mertcan Karaman
                  </Heading>
                  <Text fontSize={{ base: 'xl', md: '2xl' }}>Full Stack Developer, </Text>
                  <Text fontSize={{ base: 'xl', md: '2xl' }}>Computer Engineer </Text>
                </Flex>
                <Spacer />
                <Avatar
                  mt={{ base: '20px' }}
                  size='2xl'
                  name='Mertcan Karaman'
                  src='https://www.mertcankaraman.com/_next/image?url=%2Fimages%2Fmert.jpg&w=640&q=75'
                />{' '}
              </Flex>
            </Box>
            <Box>
              <About />
            </Box>
            <Box mt={5}>
              <Bio />
            </Box>
            <Box mt={5}>
              <ILove />
            </Box>
            <Box mt={5}>
              <OnTheWeb />
            </Box>
          </Box>
        </Container>
      </motion.div>
    </Layout>
  );
};

export default Home;
