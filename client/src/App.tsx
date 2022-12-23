import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat } from './components/Chat/Chat.indext';
import { Home } from './components/Home/Home.index';
import { MessageProvider } from './components/Message/useMessage.context';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={<Home />}
        >
          <Route
            path=""
            element={
              <MessageProvider>
                <Chat />
              </MessageProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
