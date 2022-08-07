// import { Excalidraw } from '@excalidraw/excalidraw';
import styled from 'styled-components';
import ConnectWalletButton from './buttons/ConnectWalletButton';
import MintButton from './buttons/MintButton';
import ConsoleTitle from './ConsoleTitle';
import Frame from './Frame';

const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
`;

const ConnectButtonPosition = styled.div`
  position: relative;
  left: 50.34%;
  right: 30.74%;
  top: 5.64%;
  bottom: 83.92%;
  z-index: 1;
`;

export default function WhiteBoard() {
  return (
    <Wrapper>
      <ConsoleTitle></ConsoleTitle>
      <ConnectButtonPosition>
        <ConnectWalletButton></ConnectWalletButton>
      </ConnectButtonPosition>
      <Frame></Frame>
      <MintButton></MintButton>
    </Wrapper>
  );
}
