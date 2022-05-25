import { useState, useEffect } from 'react';

const supportedChains = () => {
  const dev = process.env.NODE_ENV !== 'production' ? [parseInt(process.env.REACT_APP_LOCAL_CHAIN_ID || "0")] : [];
  const supported = [...dev, ...(process.env.REACT_APP_SUPPORTED_CHAIN_IDS || "").split(",").map(i => parseInt(i))];
  return supported;
};

const useAddresses = (chainId: number | undefined) => {
  const [addresses, setAddresses] = useState<{
    treasury?: { address: string },
  }>({});

  useEffect(() => {
    if (!chainId) return;

    if (
      process.env.REACT_APP_LOCAL_CHAIN_ID &&
      chainId === parseInt(process.env.REACT_APP_LOCAL_CHAIN_ID)
    ) {
      if (
        !process.env.REACT_APP_LOCAL_TREASURY_ADDRESS
      ) {
        console.error("Local addresses not set!");
        setAddresses({});
        return;
      }

      setAddresses({
        treasury: JSON.parse(process.env.REACT_APP_LOCAL_TREASURY_ADDRESS),
      });
    } else {
      if (
        !process.env.REACT_APP_TREASURY_ADDRESSES
      ) {
        console.error("Addresses not set!");
        setAddresses({});
        return;
      }

      const treasuryNetworksAddresses: { [chaindId: number]: { address: string } } = JSON.parse(process.env.REACT_APP_TREASURY_ADDRESSES);

      const treasuryAddress: { address: string } = treasuryNetworksAddresses[chainId];

      if (
        !treasuryAddress
      ) {
        console.error(`At least one address for network ${chainId} is not set!`);
        setAddresses({});
        return;
      }

      setAddresses({
        treasury: treasuryAddress,
      });
    }
  }, [chainId]);

  return addresses;
};

export {
  supportedChains,
  useAddresses
};