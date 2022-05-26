import { useCallback, useEffect } from 'react'
import { useTransaction } from '../contexts/web3Data/transactions';
import { useWeb3 } from '../contexts/web3Data';
import useUserDatas from '../contexts/userData/userData';
import { Treasury, Treasury__factory } from '../typechain';

const useDeposit = ({
  amount,
  address,
  setPending
}: {
  amount: string | undefined,
  address: string | undefined,
  setPending: React.Dispatch<React.SetStateAction<boolean>>;
}
) => {
  const [{ signerOrProvider }] = useWeb3();
  const userData = useUserDatas(address!);

  const [contractCallDepositTokens, contractCallPending] = useTransaction();
  useEffect(() => {
    setPending(contractCallPending);
  }, [setPending, contractCallPending]);

  let depositTokens = useCallback(() => {
    if (
      signerOrProvider === undefined ||
      amount === undefined ||
      process.env.REACT_APP_TREASURY_ADDRESSES === undefined ||
      address === undefined
    ) {
      return;
    }
    const treasury: Treasury = Treasury__factory.connect(process.env.REACT_APP_TREASURY_ADDRESSES, signerOrProvider);
    contractCallDepositTokens({
      contractFn: () =>  treasury.deposit(address, amount),
      pendingMessage: "Depositing",
      failedMessage: "Depositing Failed",
      successMessage: "Depositing Successful",
      rpcErrorCallback: (error: any) => {
        console.error(error)
      },
    });
  }, [contractCallDepositTokens, userData[0].treasuryContract, amount, signerOrProvider, address])
  return depositTokens;
}

export default useDeposit;