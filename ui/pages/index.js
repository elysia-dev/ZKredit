import { QRCode } from "react-qr-svg";

const deployedContractAddress = "0x218c786ca89c7e24128b5ca4031e3485528f7b99";

const qrProofRequestJson = {
  id: "7f38a193-0918-4a48-9fac-36adfdb8b542",
  typ: "application/iden3comm-plain-json",
  type: "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
  thid: "7f38a193-0918-4a48-9fac-36adfdb8b542",
  body: {
    reason: "airdrop participation",
    transaction_data: {
      contract_address: deployedContractAddress,
      method_id: "b68967e2",
      chain_id: 80001,
      network: "polygon-mumbai"
    },
    scope: [
      {
        id: 1,
        circuitId: "credentialAtomicQuerySigV2OnChain",
        query: {
          allowedIssuers: ["*"],
          context:
            "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld",
          credentialSubject: {
            birthday: {
              $lt: 20020101
            }
          },
          type: "KYCAgeCredential"
        }
      }
    ]
  }
};

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <span className="mb-10 text-3xl font-bold text-transparent bg-clip-text bg-blue-500">
          Zero Knowledge Credit Lending Protocol 
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center items-center md:gap-20 gap-10">
          <span>For free airdrop, verify your age</span>
          <QRCode
            level="Q"
            style={{ width: 256 }}
            value={JSON.stringify(qrProofRequestJson)}
          />
          <a className="flex justify-center items-center space-x-1 transition-colors duration-150 mb-4 text-lg text-slate-300 font-semibold py-3 px-5 rounded-md bg-blue-500">
            <span className="text-white">Request</span>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
      </div>
    </div>
  );
}
