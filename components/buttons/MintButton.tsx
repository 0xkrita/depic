import { useState } from 'react';
import styled from 'styled-components';
import SvgMintButton from '../icons/buttons/MintButton';
import SvgRedmintbutton from '../icons/buttons/RedMintButton';
import Loading from '../icons/text/LoadingMint';

const MintButtonSvg = styled.svg`
  position: absolute;
  width: 203px;
  height: 203px;
  left: 1065px;
  top: 774px;
`;

export default function MintButton({ img }: { img: Blob }) {
  const [savedToIPFS, setSavedToIPFS] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMint = () => {
    setIsLoading(true);
    mint()
      .then(() => setSavedToIPFS(true))
      .then(() => setIsLoading(false));
  };

  // Rate limiting
  const mint = async () => {
    // const res = await fetch(new Request(`/api/mint`, {
    //   method: 'POST',
    //   body: img,
    // }));

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('TIMEOUT');
        resolve({});
      }, 1500);
    });

    // let dynamicSketch = {} as SingleEditionMintableCreator;
    // await dynamicSketch.createEdition(
    //   'Testing Token',
    //   'TEST',
    //   'This is a testing token for all',
    //   'https://ipfs.io/ipfsbafybeify52a63pgcshhbtkff4nxxxp2zp5yjn2xw43jcy4knwful7ymmgy',
    //   '0x0000000000000000000000000000000000000000000000000000000000000000',
    //   '',
    //   '0x0000000000000000000000000000000000000000000000000000000000000000',
    //   // 1% royalty since BPS
    //   10,
    //   10
    // );

    // const { config } = usePrepareSendTransaction({
    //   request: { to: 'moxey.eth', value: BigNumber.from('10000000000000000') },
    // });
    // const { data, isLoading, isSuccess, sendTransaction } =
    //   useSendTransaction(config);

    // return (
    //   <div>
    //     <button disabled={!sendTransaction} onClick={() => sendTransaction?.()}>
    //       Send Transaction
    //     </button>
    //     {isLoading && <div>Check Wallet</div>}
    //     {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    //   </div>
    // );
  };

  return (
    <>
      <button
        type="button"
        onClick={handleMint}
        disabled={isLoading || savedToIPFS}
      >
        <MintButtonSvg>
          {isLoading ? (
            <Loading></Loading>
          ) : !savedToIPFS ? (
            <SvgMintButton></SvgMintButton>
          ) : (
            <SvgRedmintbutton></SvgRedmintbutton>
          )}
        </MintButtonSvg>
      </button>
    </>
  );
}
