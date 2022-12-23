import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { colors } from './colors';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: {
    ':root': {
      scrollbarColor: `slate8 transparent`,
    },
    body: {
      backgroundColor: 'slate1',
    },
    'select > option:first-of-type': {
      backgroundColor: 'slate1',
    },
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },
    '::-webkit-scrollbar-thumb:horizontal': {
      height: '9999px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'slate8',
      borderRadius: '9999px',
    },
  },
};

const semanticTokens = {
  colors,
};

export const theme = extendTheme({ config, styles, semanticTokens });
