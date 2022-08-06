// import { Excalidraw } from '@excalidraw/excalidraw';
import styled from 'styled-components';
import ConnectWalletButton from './buttons/ConnectWalletButton';
import Frame from './Frame';

const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
`;

const ButtonPosition = styled.div`
  position: relative;
  left: 50.34%;
  right: 30.74%;
  top: 5.64%;
  bottom: 83.92%;
`;

export default function WhiteBoard() {
  return (
    <Wrapper>
      <ButtonPosition>
        <ConnectWalletButton></ConnectWalletButton>
      </ButtonPosition>
      <Frame></Frame>
    </Wrapper>
  );
}
