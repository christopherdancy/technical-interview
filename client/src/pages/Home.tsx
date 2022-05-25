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
  const [pending, setPending] = useState<boolean>(false);

  const deposit = useDeposit({
    amount: amount,
    setPending
  })

  const HandleWithdraw = () => {

  }

  return (
    <div>
      <H1>Welcome to Decent Technical Interview</H1>
      <ContentBox title="">
        <CurrentBalance />
        <InputBox>
          <Input type="text" value={amount!} onChange={(e) => setAmount(e.target.value)} label="Total Amount" helperText="How much would you like to deposit or withdraw?" />
        </InputBox>
        <div className="md:grid md:grid-cols-2 gap-6 flex flex-col items-center py-4">
          <PrimaryButton label="Deposit" isLarge className="w-full" onClick={deposit}/>
          <SecondaryButton label="Withdraw" isLarge className="w-full" onClick={() => HandleWithdraw} />
        </div>
      </ContentBox>
    </div>
  );
}


export default Home;