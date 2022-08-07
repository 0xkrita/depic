// import { Excalidraw } from '@excalidraw/excalidraw';
import styled from 'styled-components';
import ConnectWalletButton from './buttons/ConnectWalletButton';
import HelpButton from './buttons/HelpButton';
import MintButton from './buttons/MintButton';
import ConsoleTitle from './ConsoleTitle';
import Frame from './Frame';
import PaintPalette from './PaintPalette';

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
      <HelpButton></HelpButton>
      <ConnectButtonPosition>
        <ConnectWalletButton></ConnectWalletButton>
      </ConnectButtonPosition>
      <Frame></Frame>
      <PaintPalette></PaintPalette>
      <MintButton></MintButton>
    </Wrapper>
  );
}
