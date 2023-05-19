
export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <span className="mb-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">
          Zero Knowledge Credit Lending Protocol 
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center items-center md:gap-20 gap-10">
          <a className="flex justify-center items-center space-x-1 transition-colors duration-150 mb-4 text-lg text-slate-300 font-semibold py-3 px-5 rounded-md bg-gradient-to-r from-amber-500 to-amber-200 hover:from-yellow-500 hover:to-amber-100">
            <span className="text-white">Request</span>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
      </div>
    </div>
  );
}
