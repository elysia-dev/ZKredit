import BorrowItem from "../components/BorrowItem";
import { initFlowbite } from 'flowbite';
import { useEffect } from "react";

export default function Home() {
  // TODO : Add Pool Info
  useEffect(() => {
    initFlowbite()
  }, [])

  return (
    <div>
      <div id="borrowModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Borrow
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="borrowModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6f flex justify-center items-center ">
              Info
            </div>
            <div className="pb-6 space-y-6f flex justify-center items-center" >
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Info
              </p>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide="borrowModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-10">
        <button data-modal-target="borrowModal" data-modal-toggle="borrowModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          Borrow
        </button>
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
              professinal: "Doctor 🩺"
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
              professinal: "Lawyer ⚖️"
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
