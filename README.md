# Contract Deployment & Verification Demo

This project demonstrates how to use hardhat or foundry to deploy a contract in a rollup network. This project contains a simple contract that will lock a certain amount of Ether in the deployed contract for a specified amount of time.


## Deploy with Hardhat

1. If you haven't already, install [nodejs](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install).
2. Run `yarn install` to install dependencies.
3. Create a `.env` file following the example `.env.example` in the root directory. Change `PRIVATE_KEY` to your own account private key in the `.env`.
4. Run `yarn compile` to compile the contract.
5. Run `yarn deploy:merlinTestnet` to deploy the contract on the Scroll Alpha Testnet.
6. Run `yarn test` for hardhat tests.

## Verify

```sh
npx hardhat verify --network merlinTestnet {contract-address} {contract-args}
```