import { useAccount, useConnect, useNetwork, useDisconnect } from "wagmi";
import networks from "../utils/networks.json";

import { switchNetwork } from "../utils/switchNetwork";

export default function ConnectWalletBtn() {
  const { connect, connectors } = useConnect();
  const { data: dataAccount } = useAccount();
  const { activeChain } = useNetwork();
  const { disconnect } = useDisconnect();

  const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
  const truncateEthAddress = (address) => {
    const match = address.match(truncateRegex);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
  };

  if (!dataAccount?.address) {
    return (
      <a onClick={() => { connect(connectors[0]) }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer">Connect Wallet</a>
    );
  } else if (activeChain?.id.toString() !== networks.selectedChain) {
    return (
      <a onClick={() => { switchNetwork() }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer">Switch Network </a>
    );
  } else {
    return (
      <a onClick={() => { disconnect() }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer">{truncateEthAddress(dataAccount?.address)}</a>
    );
  }
}
