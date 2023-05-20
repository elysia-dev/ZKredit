# ZKredit smart contracts

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