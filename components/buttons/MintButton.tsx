import { useState } from 'react';
import styled from 'styled-components';
import SvgMintButton from '../icons/buttons/MintButton';
import MintModal from '../MintModal';

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

  return (
    <>
      <button type="button" onClick={handleShow}>
        <MintButtonSvg>
          <SvgMintButton></SvgMintButton>
        </MintButtonSvg>
      </button>

      {show && (
        <>
          <MintModal></MintModal>
          <button onClick={handleClose}>[x]</button>
        </>
      )}
    </>
  );
}
