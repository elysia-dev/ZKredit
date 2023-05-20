import BorrowItem from "../components/BorrowItem";
import { initFlowbite } from 'flowbite';
import { useEffect, useState } from "react";
import CheckItem from "../components/CheckItem";

export default function Home() {
  useEffect(() => {
    initFlowbite()
  }, [])

  const [proof, setProof] = useState({
    credit: false,
    debtLevel: false,
    expense: false,
    income: false,
    tenure: false,
    professional: true,
  })

  const [modalPage, setModalPage] = useState(0)

  return (
    <div>
      <div id="borrowModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {
              modalPage === 0 &&
              <>
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Prove your elgiability to loan
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="borrowModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6f flex justify-center items-center ">
                  <ul role="list" className="space-y-5 my-7">
                    <CheckItem name="Credit Score" checked={proof.credit} />
                    <CheckItem name="Debt Level" checked={proof.debtLevel} />
                    <CheckItem name="Expense" checked={proof.expense} />
                    <CheckItem name="Income" checked={proof.income} />
                    <CheckItem name="Employment Tenure" checked={proof.tenure} />
                    <CheckItem name="Professional Occupation" checked={proof.professional} />
                  </ul>
                </div>
              </>
            }
            {
              modalPage === 1 &&
              <>
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Enter your loan info
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="borrowModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6f flex justify-center items-center ">
                  <form>
                    <div className="mb-6">
                      <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loan Amount ($)</label>
                      <input type="number" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="100000" required />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="period" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loan Term (days)</label>
                      <input type="number" id="period" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="180" required />
                    </div>
                  </form>
                </div>
              </>
            }
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              {
                modalPage === 0 &&
                <button onClick={() => { setModalPage(1) }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
              }
              {/*
                <button disabled={!proof.credit || !proof.debtLevel || !proof.expense || !proof.income || !proof.professional} onClick={() => { setModalPage(1) }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
              */}
              {
                modalPage === 1 &&
                <button onClick={() => { console.log("TX subm") }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Borrow</button>
              }
              <button onClick={() => { setModalPage(0)}} data-modal-hide="borrowModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All (3 cases)</button>
          <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">0 ~ 5%</button>
          <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">5 ~ 8%</button>
          <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">8 ~ 12%</button>
          <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">12 ~ 20%</button>
          <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">20% ~</button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid gap-2">
          <BorrowItem
            data={{
              poolSize: "$842M",
              interestRate: "4.2%",
              loanTerm: "180days",
              sizePerPerson: "$400K",
              creditScore: "877 ~ 899",
              debtLevel: "5 ~ 10%",
              expense: "$≤100K",
              income: "$≥200K",
              tenure: "≥10years",
              professional: "Doctor 🩺"
            }}
          />
          <BorrowItem
            data={{
              poolSize: "$462M",
              interestRate: "4.25%",
              loanTerm: "180days",
              sizePerPerson: "$380K",
              creditScore: "877 ~ 899",
              debtLevel: "5 ~ 15%",
              expense: "$≤100K",
              income: "$≥200K",
              tenure: "≥15years",
              professional: "Lawyer ⚖️"
            }}
          />
          <BorrowItem
            data={{
              poolSize: "$262M",
              interestRate: "5.25%",
              loanTerm: "180days",
              sizePerPerson: "$60K",
              creditScore: "877 ~ 899",
              debtLevel: "0 ~ 5%",
              expense: "$≤15K",
              income: "$≥30K",
              tenure: "≥3years",
              professinal: "-️"
            }}
          />
        </div>
      </div>
    </div>
  );
}
