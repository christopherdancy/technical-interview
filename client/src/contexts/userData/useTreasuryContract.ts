import { useState, useEffect } from 'react';

import { Treasury, Treasury__factory } from '../../typechain';
import { useWeb3 } from '../web3Data';

const useTreasuryContract = () => {
  const [treasury, setTreasury] = useState<Treasury>();
  const [{ signerOrProvider }] = useWeb3();

  useEffect(() => {
    if (!process.env.REACT_APP_TREASURY_ADDRESSES || !signerOrProvider) {
        setTreasury(undefined);
      return;
    }
    setTreasury(Treasury__factory.connect(process.env.REACT_APP_TREASURY_ADDRESSES, signerOrProvider));
  }, [process.env.REACT_APP_TREASURY_ADDRESSES, signerOrProvider]);

  return treasury;
}

export default useTreasuryContract;