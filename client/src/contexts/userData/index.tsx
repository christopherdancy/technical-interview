import { createContext, useContext } from 'react';

import useUserDatas, { UserDataContext, defaultTreasuryDataResponse } from './userData';

const createUserDataRoot = (context: React.Context<UserDataContext>) => {
  const UserDataRoot = ({ children }: { children: React.ReactNode }) => {
    const userData = useUserDatas("");

    return (
      <context.Provider value={userData}>
        {children}
      </context.Provider>
    );
  };

  return UserDataRoot;
};

const userDataContext = createContext(defaultTreasuryDataResponse);
const UserDataProvider = createUserDataRoot(userDataContext);
const useUserData: () => UserDataContext = () => useContext(userDataContext);

export { UserDataProvider, useUserData };
