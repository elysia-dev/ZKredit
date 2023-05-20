import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import { configureChains, WagmiConfig, createConfig } from "wagmi";
import { publicProvider } from 'wagmi/providers/public'
import { polygonMumbai } from 'wagmi/chains'
import { Toaster } from 'react-hot-toast';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()],
)

const config = createConfig({
  publicClient,
  webSocketPublicClient,
})

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css" />
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
      <div id='modal-root' />
      <WagmiConfig config={config}>
        <div className="flex flex-col min-h-screen px-2 text-slate-300">
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </WagmiConfig>
    </>
  );
}
