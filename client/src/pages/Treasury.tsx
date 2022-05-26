import { useState } from "react";
import { Link } from "react-router-dom";
import CurrentBalance from "../components/CurrentBalance";
import ContentBox from "../components/ui/ContentBox";
import { PrimaryButton, SecondaryButton } from "../components/ui/forms/Button";
import Input from "../components/ui/forms/Input";
import InputBox from "../components/ui/forms/InputBox";
import H1 from "../components/ui/H1";
import useDeposit from "../hooks/useDeposit"

const Home = () => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [pending, setPending] = useState<boolean>(false);

  const deposit = useDeposit({
    amount: amount,
    address:address,
    setPending
  })

  const HandleWithdraw = () => {

  }

  return (
    <div>
      <H1>Treasury</H1>
      <ContentBox title="">
        <CurrentBalance address={address} />
        <InputBox>
          <Input type="text" value={address!} onChange={(e) => setAddress(e.target.value)} label="ERC20 Token" helperText="What ERC20 Token?" />
        </InputBox>
        <InputBox>
          <Input type="text" value={amount!} onChange={(e) => setAmount(e.target.value)} label="Total Amount" helperText="How much would you like to deposit or withdraw?" />
        </InputBox>
        <div className="md:grid md:grid-cols-2 gap-6 flex flex-col items-center py-4">
          <PrimaryButton label="Deposit" isLarge className="w-full" onClick={deposit} />
          <SecondaryButton label="Withdraw" isLarge className="w-full" onClick={() => HandleWithdraw} />
        </div>
      </ContentBox>
    </div>
  );
}


export default Home;