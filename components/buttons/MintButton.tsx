import type { Token, TokenInput } from 'nft.storage/dist/src/lib/interface';
import { useReducer } from 'react';
import styled from 'styled-components';
import { wrapJsonResolver } from '../../utils/stub';
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

export enum ActionType {
  MINT_START,
  IPFS_SAVED,
  MINT_ERROR,
}

export type MintState = {
  loading: boolean;
  ipfsPayload?: Token<TokenInput>;
  error: boolean;
};
export type MintAction = {
  type: ActionType;
  payload?: Token<TokenInput>;
};

const mintReducer = (state: MintState, action: MintAction): MintState => {
  switch (action.type) {
    case ActionType.MINT_START:
      return {
        loading: true,
        error: false,
      };
    case ActionType.IPFS_SAVED:
      return {
        ...state,
        loading: false,
        ipfsPayload: action.payload,
      };
    case ActionType.MINT_ERROR:
      return {
        error: true,
        loading: false,
        ipfsPayload: action.payload,
      };
    default:
      return state;
  }
};

export default function MintButton({ img }: { img: Blob }) {
  const [state, dispatch] = useReducer(mintReducer, {
    loading: false,
    error: false,
  });

  const handleMint = () => {
    dispatch({ type: ActionType.MINT_START });
    saveToIPFS()
      .then((res) => res.json())
      .then((data: Token<TokenInput>) => {
        dispatch({ type: ActionType.IPFS_SAVED, payload: data });
        console.log(data);
      })
      .catch(() => dispatch({ type: ActionType.MINT_ERROR }));
  };

  // // Rate limiting on API (with Next middleware maybe)
  // const saveToIPFS = async () =>
  //   fetch(
  //     new Request(`/api/mint`, {
  //       method: 'POST',
  //       body: img,
  //     })
  //   );

  // timout util stub for testing ipfs saves
  const saveToIPFS = wrapJsonResolver({
    ipnft: 'bafyreiadodu7zbhhzzhcribkbsz3g7ealhcsendvvr2ilb5zvsbi6c7qre',
    url: 'ipfs://bafyreiadodu7zbhhzzhcribkbsz3g7ealhcsendvvr2ilb5zvsbi6c7qre/metadata.json',
  } as Token<TokenInput>);

  const mint = async () => {
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
  };

  return (
    <>
      <button
        type="button"
        onClick={handleMint}
        disabled={state.loading || !!state.ipfsPayload}
      >
        <MintButtonSvg>
          {state.loading ? (
            <Loading></Loading>
          ) : !state.ipfsPayload ? (
            <SvgMintButton></SvgMintButton>
          ) : (
            <SvgRedmintbutton></SvgRedmintbutton>
          )}
        </MintButtonSvg>
      </button>
    </>
  );
}
