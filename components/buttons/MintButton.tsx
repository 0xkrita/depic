import { useState } from 'react';
import styled from 'styled-components';
import SvgMintButton from '../icons/buttons/MintButton';

const MintButtonSvg = styled.svg`
  position: absolute;
  width: 203px;
  height: 203px;
  left: 1065px;
  top: 774px;
`;

export default function MintButton({ img }: { img: Blob }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Rate limiting
  const mint = async () => {
    const request = new Request(`/api/mint`, {
      method: 'POST',
      body: img,
    });
    const res = await fetch(request);
    console.log(res.json());

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
      <button type="button" onClick={() => alert('WIP')}>
        <MintButtonSvg>
          <SvgMintButton></SvgMintButton>
        </MintButtonSvg>
      </button>

      {/* <button type="button" onClick={handleShow}>
        <MintButtonSvg>
          <SvgMintButton></SvgMintButton>
        </MintButtonSvg>
      </button>
      {show && (
        <>
          <MintModal></MintModal>
          <button onClick={handleClose}>[x]</button>
        </>
      )} */}
    </>
  );
}
