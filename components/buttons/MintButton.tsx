import { SingleEditionMintableCreator } from '@zoralabs/nft-editions-contracts/typechain';
import { useState } from 'react';
import styled from 'styled-components';
import { client } from '../../utils/storage';
import SvgMintButton from '../icons/buttons/MintButton';

const MintButtonSvg = styled.svg`
  position: absolute;
  width: 203px;
  height: 203px;
  left: 1065px;
  top: 774px;
`;

export default function MintButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const mint = async () => {
    const imageOriginUrl =
      'https://user-images.githubusercontent.com/87873179/144324736-3f09a98e-f5aa-4199-a874-13583bf31951.jpg';
    const image = await fetch(imageOriginUrl)
      .then((r) => r.blob())
      .catch((r) => {
        if (!r.ok) {
          throw new Error(
            `error fetching image: [${r.statusCode}]: ${r.status}`
          );
        }
        return r.blob();
      });
    const sampleNFT = {
      image, // use image Blob as `image` field
      name: "Storing the World's Most Valuable Virtual Assets with NFT.Storage",
      description: 'The metaverse is here. Where is it all being stored?',
      properties: {
        type: 'blog-post',
        origins: {
          http: 'https://nft.storage/blog/post/2021-11-30-hello-world-nft-storage/',
          ipfs: 'ipfs://bafybeieh4gpvatp32iqaacs6xqxqitla4drrkyyzq6dshqqsilkk3fqmti/blog/post/2021-11-30-hello-world-nft-storage/',
        },
        authors: [{ name: 'David Choi' }],
        content: {
          'text/markdown':
            "The last year has witnessed the explosion of NFTs onto the world's mainstage. From fine art to collectibles to music and media, NFTs are quickly demonstrating just how quickly grassroots Web3 communities can grow, and perhaps how much closer we are to mass adoption than we may have previously thought. <... remaining content omitted ...>",
        },
      },
    };

    const metadata = await client.store(sampleNFT);

    alert(metadata);

    let dynamicSketch = {} as SingleEditionMintableCreator;

    await dynamicSketch.createEdition(
      'Testing Token',
      'TEST',
      'This is a testing token for all',
      'https://ipfs.io/ipfsbafybeify52a63pgcshhbtkff4nxxxp2zp5yjn2xw43jcy4knwful7ymmgy',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      // 1% royalty since BPS
      10,
      10
    );

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
        onClick={() => alert(`insert minting zora editions logic`)}
      >
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
