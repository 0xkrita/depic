import styled from 'styled-components';
import SvgUiFrame from './icons/UiFrame';

const UIFrame = styled.svg`
  height: 967.2699584960938px;
  width: 1049.6400146484375px;
  left: 433.3599853515625px;
  top: 35.09002685546875px;
  border-radius: 0px;
`;

export default function Frame() {
  return (
    <div>
      <UIFrame>
        <SvgUiFrame></SvgUiFrame>
      </UIFrame>
    </div>
  );
}
