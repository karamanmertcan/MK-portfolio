import React from 'react';
import { Box } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export const serializers = {
  types: {
    code: (props: any) => {
      const { language, code } = props?.node;
      return (
        <Box py={2}>
          <SyntaxHighlighter
            customStyle={{
              lineHeight: '1.75',
              fontSize: '0.9rem',
              fontStyle: 'inherit'
            }}
            style={nightOwl}
            language={language || ''}>
            {code || ''}
          </SyntaxHighlighter>
        </Box>
      );
    }
  }
};
