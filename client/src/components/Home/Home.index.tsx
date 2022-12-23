import { Button, Center, Input } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

export function Home() {
  const [logged, setLogged] = useState(
    !!localStorage.getItem('user.windowing-chat')
  );
  const userRef = useRef<HTMLInputElement>(null);

  const handleSignIn = () => {
    if (userRef?.current && userRef.current.value !== '') {
      localStorage.setItem('user.windowing-chat', userRef.current.value);
      setLogged(true);
    }
  };

  if (!logged) {
    return (
      <Center
        h="100vh"
        p="16"
        gap="16"
      >
        <Input
          ref={userRef}
          variant="filled"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSignIn();
            }
          }}
        />
        <Button onClick={() => handleSignIn()}>Sign In</Button>
      </Center>
    );
  }

  return <Outlet />;
}
