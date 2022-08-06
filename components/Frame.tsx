import styled from 'styled-components';
import SvgUiFrame from './icons/UiFrame';

const UIFrame = styled.svg`
  position: absolute;
  width: 1014px;
  height: 988px;
  left: 259px;
  top: 21px;
`;

export default function Frame() {
  return (
    <UIFrame>
      <SvgUiFrame></SvgUiFrame>
    </UIFrame>
  );
}
