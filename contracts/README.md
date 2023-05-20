# ZKredit smart contracts

## Contracts
### Mumbai

| contract       | address                                                                                                                         |
|----------------|---------------------------------------------------------------------------------------------------------------------------------|
| LendingPool    | [0xBb8A5ece08499c5ECF06d1A394260C12fd09FB83](https://mumbai.polygonscan.com/address/0xBb8A5ece08499c5ECF06d1A394260C12fd09FB83) |
| ERC721Verifier | [0x94DE02C799EdcED78bbDF253a7b563D4069A62Fb](https://mumbai.polygonscan.com/address/0x94DE02C799EdcED78bbDF253a7b563D4069A62F)  |                                          |


## How to issue
https://issuer-demo.polygonid.me/main

https://raw.githubusercontent.com/elysia-dev/ZKredit/main/contracts/schemas/json/KYCPersonalCreditCredential-v2.json

```json
{
  "creditScore": 900,
  "averageIncome": 50000,
  "totalDebt": 10000
}
```

You can create `query.schema` and `query.claimPathKey` to call `setRequest` in https://go.dev/play/p/kK3VYlqKtPX