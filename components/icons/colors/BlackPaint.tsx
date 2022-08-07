import { SVGProps } from 'react';
import styled from 'styled-components';

const BlackPaint = styled.svg`
  position: absolute;
  width: 73px;
  height: 73px;
  left: 388px;
  top: 814px;
  border-radius: 0px;
  background: #000000;
  /* border: 4px solid #FFFFFF; */
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const SvgBlackPaint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.83 80.36" {...props}>
    <path
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M2 2h72.83v76.36H2z"
      data-name="Layer 2"
    />
  </svg>
);

export default function BlackPaintPalette() {
  return (
    <BlackPaint>
      <SvgBlackPaint></SvgBlackPaint>
    </BlackPaint>
  );
}
