import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <a
            href="/"
            rel="noopener noreferrer"
          >
            <img src={`/logo.png`} alt="Thirdweb Logo" width={80} />
          </a>
        </div>
      </div>
      <div className={styles.left2}>
        <div>
          <a
            href="/"
            rel="noopener noreferrer"
            onClick={() => window.open("https://quickswap.exchange/#/swap?outputCurrency=0x6b252602d7d6740a62a1eabe6f0408cfb6995d42", "_blank")}
          >
            <img src={`/logo2.png`} alt="Pizza Token Logo" width={80} />
          </a>
        </div>
      </div>
      <div className={styles.right}>
        {address ? (
          <>
            <a
              className={styles.secondaryButton}
              onClick={() => disconnectWallet()}
            >
              
              Disconnect Wallet
            </a>
            <p style={{ marginLeft: 8, marginRight: 8, color: "grey" }}>|</p>
            <p>{address.slice(0, 6).concat("...").concat(address.slice(-4))}</p>
          </>
        ) : (
          <a
            className={styles.mainButton}
            onClick={() => connectWithMetamask()}
          >
            Connect Wallet
          </a>
        )}
      </div>
    </div>
  );
}

