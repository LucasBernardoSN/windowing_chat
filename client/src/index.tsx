import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { SocketProvider } from './context/Socket.context';
import { UserProvider } from './context/User.context';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <UserProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
