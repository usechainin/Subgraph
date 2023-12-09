# Subgraph for CCIP NFT minting

## Endpoint

1. Sepolia: `https://api.studio.thegraph.com/query/60400/chainlinkhack-opgoer-nft/version/latest`
2. Avalanche Fuji: `https://api.studio.thegraph.com/query/60400/chainlinkhack-fuji-nft/version/latest`
3. Optimism Goerli: `https://api.studio.thegraph.com/query/60400/chainlinkhack-opgoer-nft/version/latest`

## Query Format

```
{
  newApplicants {
    id
    applicant
    listingID
    profileURL
    transactionHash
    blockNumber
    blockTimestamp
  }
}
```

## Deploy

1. `graph codegen`
2. `graph buld --network <network name in network.json>`
3. `graph deploy --studio <subgraph studio name>`
