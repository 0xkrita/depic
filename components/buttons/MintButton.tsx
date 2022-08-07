import styled from 'styled-components';
import SvgMintButton from '../icons/buttons/MintButton';

const MintButtonSvg = styled.svg`
  position: absolute;
  width: 203px;
  height: 203px;
  left: 1065px;
  top: 774px;
`;

export default function MintButton() {
  const fakeOnClick = () => {
    alert('yes you clicked the mint button');
  };

  return (
    <button type="button" onClick={fakeOnClick}>
      <MintButtonSvg>
        <SvgMintButton></SvgMintButton>
      </MintButtonSvg>
    </button>
  );
}
