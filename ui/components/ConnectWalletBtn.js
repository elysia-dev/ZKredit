import { useAccount, useConnect, useNetwork, useDisconnect, useSwitchNetwork } from "wagmi";
import networks from "../utils/networks.json";

export default function ConnectWalletBtn() {
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()
  const { switchNetwork } =
  useSwitchNetwork()
  const { disconnect } = useDisconnect();

  const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
  const truncateEthAddress = (address) => {
    const match = address.match(truncateRegex);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
  };

  if (!isConnected) {
    return (
      <a onClick={() => { connect({connector: connectors[0]}) }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer">Connect Wallet</a>
    );
  } else if (chain?.id.toString() !== networks.selectedChain) {
    return (
      <a onClick={() => { switchNetwork(networks.selectedChain) }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer">Switch Network </a>
    );
  } else {
    return (
      <a onClick={() => { disconnect() }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer">{truncateEthAddress(address)}</a>
    );
  }
}
