import { useMemo, createContext } from 'react';

type UserContextType = {
  name: string;
};

const UserContext = createContext({} as UserContextType);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const providerValue = useMemo(() => ({ name: 'John Doe' }), []);

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};
