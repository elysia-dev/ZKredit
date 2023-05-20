export default function BorrowItem(props) {
  return (
    <div data-modal-target="borrowModal" data-modal-toggle="borrowModal" className="w-full p-6 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 cursor-pointer">
      <div className="grid grid-cols-10 gap-8">
        <div>
          <p className="text-xs text-gray-500 mb-2">Pool Size</p>
          <p>{props.data.poolSize}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-2">Interest Rate</p>
          <p>{props.data.interestRate}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-2">Loan Term</p>
          <p>{props.data.loanTerm}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-2">Loan Size</p>
          <p>{props.data.sizePerPerson}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-2">Credit Score</p>
          <p>{props.data.creditScore}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-2">Debt Level</p>
          <p>{props.data.debtLevel}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-2">Expense</p>
          <p>{props.data.expense}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-2">Income</p>
          <p>{props.data.income}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-2">Tenure</p>
          <p>{props.data.tenure}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-2">Professional</p>
          <p>{props.data.professional}</p>
        </div>
      </div>
    </div>
  )
}
