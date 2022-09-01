import ZoraNFTCreatorABI from '@zoralabs/nft-drop-contracts/dist/artifacts/ZoraNFTCreatorV1.sol/ZoraNFTCreatorV1.json';
import { usePrepareContractWrite } from 'wagmi';

export const useMint = () => {
  // create drops (not the minting process)
  const { config } = usePrepareContractWrite({
    addressOrName: process.env.GOERLI_ZORA_DROP_CONTRACT,
    contractInterface: ZoraNFTCreatorABI.abi,
    functionName: 'createDrop',
  });

  return {};
};
