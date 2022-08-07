import { SVGProps } from 'react';
import styled from 'styled-components';

const WhitePaint = styled.svg`
  position: absolute;
  width: 73px;
  height: 73px;
  left: 470px;
  top: 814px;
  border-radius: 0px;
  background: #000000;
  /* border: 4px solid #FFFFFF; */
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const SvgWhitePaint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.83 76.36" {...props}>
    <path fill="#fff" d="M0 0h72.83v76.36H0z" data-name="Layer 2" />
  </svg>
);

export default function WhitePaintPalette() {
  return (
    <WhitePaint>
      <SvgWhitePaint></SvgWhitePaint>
    </WhitePaint>
  );
}
