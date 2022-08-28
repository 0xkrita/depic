import { ConnectButton } from '@rainbow-me/rainbowkit';
import styled from 'styled-components';
import SvgConnectWalletButton from '../icons/ConnectWalletButton';

const ConnectWalletSvg = styled.svg`
  height: 112.72999572753906px;
  width: 267.280029296875px;
  left: 1062.449951171875px;
  top: 60.90997314453125px;
  border-radius: 0px;
`;

const ConnectWalletButton = () => (
  <ConnectButton.Custom>
    {({
      account,
      chain,
      openAccountModal,
      openChainModal,
      openConnectModal,
      mounted,
    }) => {
      return (
        <div
          {...(!mounted && {
            'aria-hidden': true,
            style: {
              opacity: 0,
              pointerEvents: 'none',
              userSelect: 'none',
            },
          })}
        >
          {(() => {
            if (!mounted || !account || !chain) {
              return (
                <button
                  onClick={openConnectModal}
                  type="button"
                  style={{
                    width: '270px',
                  }}
                >
                  <ConnectWalletSvg>
                    <SvgConnectWalletButton></SvgConnectWalletButton>
                  </ConnectWalletSvg>
                </button>
              );
            }

            if (chain.unsupported) {
              return (
                <button onClick={openChainModal} type="button">
                  Wrong network
                </button>
              );
            }

            return (
              <div>
                <button
                  onClick={openChainModal}
                  style={{ display: 'flex', alignItems: 'center' }}
                  type="button"
                >
                  {chain.hasIcon && (
                    <div
                      style={{
                        background: chain.iconBackground,
                        width: 12,
                        height: 12,
                        borderRadius: 30,
                        overflow: 'hidden',
                        marginRight: 4,
                      }}
                    >
                      {chain.iconUrl && (
                        <img
                          alt={chain.name ?? 'Chain icon'}
                          src={chain.iconUrl}
                          style={{ width: 12, height: 12 }}
                          // layout="fill"
                        />
                      )}
                    </div>
                  )}
                  {chain.name}
                </button>

                <button onClick={openAccountModal} type="button">
                  {account.displayName}
                  {account.displayBalance ? ` (${account.displayBalance})` : ''}
                </button>
              </div>
            );
          })()}
        </div>
      );
    }}
  </ConnectButton.Custom>
);

export default ConnectWalletButton;
