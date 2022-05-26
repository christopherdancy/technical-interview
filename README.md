# Technical Interview

# Introduction

Welcome to the Decent Labs technical interview - The intent of this interview is to learn how you think through technical problems. Therefore, a huge emphasis will be places on your critical thinking and how you approach technical specs.

# Technical Task

This codebase contains two separate packages:
 - Client - A typescript react app utilizing tailwind
 - Hardhat - A hardhat repo with solidity contracts, a test-suite, and deployments

The two packages exist within this monorepo to represent the smart-contract and the frontend-client of a simple token treasury. Your goals:
 - develop treasury smart-contracts
 - create smart-contract tests
 - deploy contracts
 - read a users balance from the client
 - deposit to the treasury from the client
 - withdraw from the treasury from the client.=

Please find a detailed list of action items below.

# Technical Goals - Smart Contracts

// this is a problem
Smart Contracts(Treasury.sol):
 - Create a smart contract which allows an arbitrary user to deposit an arbitrary erc20 token
 - Maintain a public running balance of the user => token => deposits
 - A user w/ a balance should be able to withdraw tokens from their balance
 - There should be a deposit event
 - There should be a withdraw event 
 - Deposits and Withdraws should use safeTransfer from SafeERC20

Compile Contracts 
```shell
npm run compile
```

Smart Contracts(test/index.ts)
- Test if Deposit updates state, emits and event, and fails if a user is attempting to deposit more tokens than they have.
- Test if Withdraw updates state, emits and event, and fails if a user is attempting to withdraw more than their current balance.

Run Tests
```shell
npm run tests
```

Deploy contracts to a local node
```shell
npx hardhat node
```

# Technical Goals - Client

- Copy generated types from hardhat into src directory

Build frontend 
```shell
npm run start
```

Client(Treasury.tsx)
- Should have a field which states your current balance.
- Input boxes for a user to indicate the amount and the token address they wish to deposit or withdraw.
- Two buttons which allow a user to deposit and withdraw from the treasury.

Transactions(hooks/useDeposit.ts)
- Create a hook for Withdrawing - you may use useDeposit as a template.
- Hook up useWithdraw within the treasury component.
- When a transaction is pending - disable the two buttons.

Listeners(context/userData/useuserBalance.ts)
- Create a listener derived from the typechain for the withdraw event.
- You may use the deposit filter as a template.
- When a transaction occurs which triggers the withdraw method, the data should update without having to refresh the page.

# Scoring Criteria  

- Solidity Understanding
- React Understanding
- Web3 Understanding
- Tech-stack Familiarity
- Tech-doc Thinking Process

Please take your time reviewing the code base and discussing your plan of attack. This step in the process is way more important then writing lines of code.
