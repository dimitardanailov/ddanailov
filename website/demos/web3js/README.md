# web3js playground and besu setup

I've been working on the following researching task: Indexing smart contract
into an off-chain storage

The current project is a playground of comparing between public and private
blockchain(Hyperledger Besu). How we can get balance, subscribe to smart
contract and etc.

### Etherium public blockchain

```bash
# Uses Etherium public blockchain to check the specific balance
yarn run balance

# Uses Etherium public blockchain to retrieve a public blockchain contract
yarn run contract

# Uses Etherium public blockchain to subscribe to contract past events
yarn run contract:subscribe
yarn run contract:filter
```

### Hyperledger BESU

`src/config/token.json` is abi contract configuration.

```bash
yarn run besu
```
