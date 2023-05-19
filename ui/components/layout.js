import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import Script from "next/script";
import { WagmiConfig, createClient } from "wagmi";
import { providers } from "ethers";

import networks from "../utils/networks.json";

// Provider that will be used when no wallet is connected (aka no signer)
const provider = providers.getDefaultProvider(
  networks[networks.selectedChain].rpcUrls[0]
);

const client = createClient({
  autoConnect: true,
  provider,
});

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>ZKredit</title>
        <meta name="title" content="zkSudoku" />
        <meta name="description" content="Zero Knowledge Credit Lending Protocol" />
        <meta name="theme-color" content="#ea580c" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zkredit.vercel.app/" />
        <meta property="twitter:title" content="ZKredit" />
        <meta
          property="twitter:description"
          content="Zero Knowledge Credit Lending Protocol "
        />
        <meta property="twitter:image" content="https://zkredit.vercel.app/socialMedia.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" key="ogtype" />
        <meta
          property="og:url"
          content="https://zkredit.vercel.app/"
          key="ogurl"
        />
        <meta property="og:image" content="https://zkredit.vercel.app/socialMedia.png" key="ogimage" />
        <meta property="og:title" content="zkredit" key="ogtitle" />
        <meta
          property="og:description"
          content="Zero Knowledge Credit Lending Protocol"
          key="ogdesc"
        />
      </Head>
      <WagmiConfig client={client}>
        <div className="flex flex-col min-h-screen px-2 text-slate-300">
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </WagmiConfig>
    </>
  );
}
