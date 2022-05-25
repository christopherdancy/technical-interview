import { useEffect, useState } from 'react';
import { useWeb3 } from "../web3Data";

import { Treasury } from '../../typechain';
import { BigNumber } from 'ethers';

const useUserBalance = (treasury: Treasury | undefined) => {
  const [{ account }] = useWeb3();
  const [userBalance, setUserBalance] = useState<BigNumber>();

  useEffect(() => {
    if(!treasury || !account) {
      setUserBalance(undefined);
      return;
    }
    
    treasury.userBalances(account)
      .then(setUserBalance)
      .catch(console.error);
  }, [treasury]);

  return userBalance;
}

export default useUserBalance;