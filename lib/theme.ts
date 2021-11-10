// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#fff', '#202023')(props)
    }
  })
};

// 3. extend the theme
const theme = extendTheme({ config, styles });

export default theme;
