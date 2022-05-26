import { useEffect, useState } from 'react';
import { useWeb3 } from "../web3Data";

import { Treasury } from '../../typechain';
import { BigNumber } from 'ethers';

const useUserBalance = (treasury: Treasury | undefined, address: string) => {
  const [{ account }] = useWeb3();
  const [userBalance, setUserBalance] = useState<BigNumber>();

  useEffect(() => {
    if(!treasury || !account) {
      setUserBalance(undefined);
      return;
    }
    
    treasury.userBalances(account, address)
      .then(setUserBalance)
      .catch(console.error);
  }, [treasury, account, address]);

  useEffect(() => {
    if (treasury === undefined) {
      setUserBalance(undefined);
      return;
    }

    const filter = treasury.filters.Deposit();

    const listenerCallback = (
      sender: string,
      token: string,
      amount: BigNumber,
      _: any
    ) => {
      const newUserBalance: BigNumber = 
        amount
      ;
      setUserBalance(newUserBalance);
    };

    treasury.on(filter, listenerCallback);

    return () => {
      treasury.off(filter, listenerCallback);
    };
  }, [account, treasury]);




  return userBalance;
}

export default useUserBalance;