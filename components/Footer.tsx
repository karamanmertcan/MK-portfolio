import React, { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';

function Footer(): ReactElement {
  return (
    <Box w='100%' align='center' justify='center' p={10}>
      &copy; 2021 Mertcan Karaman. All Rights Reserved.
    </Box>
  );
}

export default Footer;
