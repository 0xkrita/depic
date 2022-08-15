// import { Excalidraw } from '@excalidraw/excalidraw';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ConnectWalletButton from './buttons/ConnectWalletButton';
import HelpButton from './buttons/HelpButton';
import MintButton from './buttons/MintButton';
import ConsoleTitle from './ConsoleTitle';
import Frame from './Frame';
import FillButton from './icons/color-fills/FillButton';
import DrawButton from './icons/draw/DrawButton';
import EraseButton from './icons/EraseButton';
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
  const canvas = useRef<HTMLCanvasElement>(null);

  const [doodle, setDoodle] = useState<Blob>(new Blob([]));

  useEffect(() => {
    // TODO: refactor this into a hook useCanvas
    const ctx = canvas.current!.getContext('2d');
    ctx!.fillStyle = 'green';
    ctx!.fillRect(10, 10, 150, 100);
    canvas.current!.toBlob((blob) => {
      setDoodle(blob!);
    }, 'image/jpeg');
  });

  return (
    <Wrapper>
      <ConsoleTitle></ConsoleTitle>
      <HelpButton></HelpButton>
      <ConnectButtonPosition>
        <ConnectWalletButton></ConnectWalletButton>
      </ConnectButtonPosition>
      <DrawButton></DrawButton>
      <FillButton></FillButton>
      <EraseButton></EraseButton>
      <Frame></Frame>
      <canvas ref={canvas}></canvas>
      <PaintPalette></PaintPalette>
      <MintButton img={doodle}></MintButton>
    </Wrapper>
  );
}
