// import { Excalidraw } from '@excalidraw/excalidraw';
import styled from 'styled-components';
import Frame from './Frame';

const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
`;

export default function WhiteBoard() {
  return (
    <Wrapper>
      <Frame></Frame>
    </Wrapper>
  );
}
