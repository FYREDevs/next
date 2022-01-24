import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "../styles/globals.css";

const supporetedChainId = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supporetedChainId}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
