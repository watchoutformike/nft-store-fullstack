import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";
import Header from "../components/Header";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Pizza Market</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Pizza Market, NFT Marketplace on Polygon, fueled by Pizza Tokens. Buy, sell, auction NFTs, list with any erc20 token."
        />
        <meta
          name="keywords"
          content="Thirdweb, Marketplace, NFT Marketplace, NFT Auction, Pizza Market, Opensea, Polygon, WOFM, Pizza, Pizza Market Space, Pizza Market NFT"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
