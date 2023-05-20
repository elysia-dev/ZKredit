import Item from "../components/Item";
import { useQRCode } from 'next-qrcode';
import { initFlowbite } from 'flowbite';
import { useEffect } from "react";
import nftAbi from '../utils/abiFiles/nft.json'
import { useContractRead, useContractReads, useAccount } from 'wagmi'
import _ from 'lodash'

const qrProofRequestJson = {
  id: "7f38a193-0918-4a48-9fac-36adfdb8b542",
  typ: "application/iden3comm-plain-json",
  type: "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
  thid: "7f38a193-0918-4a48-9fac-36adfdb8b542",
  body: {
    reason: "airdrop participation",
    transaction_data: {
      contract_address: process.env.NEXT_PUBLIC_NFT_ADDRESS,
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
            "https://raw.githubusercontent.com/elysia-dev/ZKredit/main/contracts/schemas/json-ld/kyc-v2.jsonld",
          credentialSubject: {
            creditScore: {
              $gt: 900
            }
          },
          type: "KYCPersonalCreditCredential"
        }
      }
    ]
  }
};

export default function Home() {
  useEffect(() => {
    initFlowbite()
  }, [])
  const { Canvas } = useQRCode();
  const { address } = useAccount();

  const {data: nextId, isLoading, error } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT_ADDRESS,
    abi: nftAbi,
    functionName: 'nextId',
    isRefetching: true,
    onError(error) {
      console.log(error)
    },
  })

  const { data: owners, isLoading: ownersLoading, error: nftsError } = useContractReads({
    contracts: nextId ? _.range(0, Number(nextId)).map((id) => {
      return {
        address: process.env.NEXT_PUBLIC_NFT_ADDRESS,
        abi: nftAbi,
        functionName: 'ownerOf',
        isRefetching: true,
        args: [id]
      }
    }) : []
  }, [nextId])

  return (
    <div>
      <div id="mintModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Mint Credit NFT
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="mintModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6f flex justify-center items-center ">
              <Canvas
                text={JSON.stringify(qrProofRequestJson)}
                options={{
                  level: 'q',
                  width: 256,
                }}
              />
            </div>
            <div className="pb-6 space-y-6f flex justify-center items-center" >
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Scan QR code with Polygon ID
              </p>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide="mintModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-10">
        <button data-modal-target="mintModal" data-modal-toggle="mintModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          Mint
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-2">
          {
            !ownersLoading && owners?.map((owner, index) => {
              if(owner.result === address){
                return <Item tokenId={index} key={index}/>
              } else {
                return <></>
              }
            })
          }
        </div>
      </div>
    </div>
  );
}
