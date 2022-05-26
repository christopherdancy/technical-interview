import { useState } from 'react';
import { BigNumber } from 'ethers';

import useTreasuryContract from './useTreasuryContract';
import useUserBalance from './useUserBalance';
import { Treasury } from '../../typechain';
export interface UserData {
  treasuryContract: Treasury | undefined,
  userBalance: BigNumber | undefined,
};

type SetTreasuryAddressFn = React.Dispatch<React.SetStateAction<string | undefined>>;
export type UserDataContext = readonly [UserData, SetTreasuryAddressFn];

export const defaultTreasuryDataResponse = [{} as UserData, (() => undefined) as SetTreasuryAddressFn] as const;

const useUserDatas = (address: string) => {
  const [treasuryAddress, setTreasuryAddress] = useState<string>();
  const treasuryContract = useTreasuryContract();
  const userBalance = useUserBalance(treasuryContract, address);

  const userData: UserData = {
    treasuryContract,
    userBalance
  };

  return [userData, setTreasuryAddress] as const;
};

export default useUserDatas;
