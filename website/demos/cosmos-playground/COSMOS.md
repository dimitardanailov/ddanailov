### What elliptic curve is it using?

### Is it supported by HPCS?

### Is it supported by Merkle Science?

### What blockchain explorers are there?

- ## Mainnet:
  - https://www.mintscan.io/cosmos
  - https://atomscan.com/
  - https://atom.tokenview.com/
  - https://cosmos.bigdipper.live/
- ## Testnet:
  - https://github.com/cosmos/testnets/tree/master/v7-theta
  - https://testnet.cosmos.bigdipper.live/
- ## Beta:

### Are there APIs for querying balance?

Code snippet:

```javascript
```

### Are there APIs for submitting transactions?

Code snippet

```javascript
async getTransactions(address: string) {
    const client = await StargateClient.connect(this.endpoint)
    const query = {sentFromOrTo: address}
    const results = await client.searchTx(query)

    const transactions = results
      .filter(transaction => {
        return transaction.code === 0
      })
      .filter(transaction => {
        try {
          const log = JSON.parse(transaction.rawLog)
          const arrayIsValid = log.length > 0

          return arrayIsValid
        } catch (e) {
          return false
        }
      })
      .map((indexedTx: IndexedTx) => {
        const cosmosTransaction: AtomTransaction = decodeRawLog(
          indexedTx.rawLog,
        )

        return {
          hash: indexedTx.hash,
          source: cosmosTransaction.sender.toLowerCase(),
          destination: cosmosTransaction.recipient.toLowerCase(),
          value: Number(cosmosTransaction.amount),
          rawValue: cosmosTransaction.amount,
        }
      })
      .filter(indexedTx => {
        return indexedTx.source !== address.toLowerCase()
      })

    return transactions
  }
```

### Are there APIs for querying expected transaction fees?

Code snippet:

```javascript
```

### How do we get Testnet tokens?

> We want to set up a bot to give out tokens through Discord, but for now you
> can keep asking in the new-devs-support channel

## -

### Can it create an issuance?

### Can it mint new tokens?

### Can it burn tokens?(redemption)

### Can it lock and unlock tokens?

### Can it burn another party’s tokens?(recovery)

### Can it record data(poll)

Resources:

- CosmJS + Stargate – A guided tour:
  https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9
- Documentation: https://cosmos.github.io/cosmjs/
