import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.goerli, chain.mainnet],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_GOERLI_KEY }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'DEPIC',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function AppWrapper({ children }: { children: JSX.Element }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode modalSize="compact" chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
