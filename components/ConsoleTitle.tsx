import styled from 'styled-components';
import SvgName from './icons/text/Name';

const Title = styled.svg`
  position: absolute;
  width: 199px;
  height: 84px;
  left: 284px;
  top: 65px;
  z-index: 1;
`;

export default function ConsoleTitle() {
  return (
    <Title>
      <SvgName></SvgName>
    </Title>
  );
}
