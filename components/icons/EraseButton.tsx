import { SVGProps } from 'react';
import styled from 'styled-components';

const SvgEraseButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 123.17 123.17"
    {...props}
  >
    <defs>
      <pattern
        id="EraseButton_svg__a"
        data-name="6 dpi 50%"
        width={48}
        height={48}
        patternUnits="userSpaceOnUse"
      >
        <path fill="none" d="M0 0h48v48H0z" />
        <circle cx={24} cy={48} r={6} fill="#231f20" />
        <circle cx={48} cy={48} r={6} fill="#231f20" />
        <circle cx={24} cy={24} r={6} fill="#231f20" />
        <circle cx={48} cy={24} r={6} fill="#231f20" />
        <circle cx={36} cy={36} r={6} fill="#231f20" />
        <circle cx={12} cy={36} r={6} fill="#231f20" />
        <circle cx={36} cy={12} r={6} fill="#231f20" />
        <circle cx={12} cy={12} r={6} fill="#231f20" />
        <circle cy={48} r={6} fill="#231f20" />
        <circle cy={24} r={6} fill="#231f20" />
        <circle cx={24} r={6} fill="#231f20" />
        <circle cx={48} r={6} fill="#231f20" />
        <circle r={6} fill="#231f20" />
      </pattern>
    </defs>
    <g data-name="Layer 2">
      <g data-name="Erase Button">
        <path
          fill="#fff"
          strokeMiterlimit={10}
          strokeWidth={6}
          stroke="url(#EraseButton_svg__a)"
          d="M3 3h117.17v117.17H3z"
        />
        <path d="M45 27 23 49a8.13 8.13 0 0 0 0 11.38l43.78 43.8a8.11 8.11 0 0 0 11.38 0l22.06-22.06a8.11 8.11 0 0 0 0-11.38L56.41 27A8.1 8.1 0 0 0 45 27Zm49.3 49.43L72.44 98.29 50.71 76.55l21.85-21.86Z" />
      </g>
    </g>
  </svg>
);

const EraseSpace = styled.svg`
  position: absolute;
  height: 175.98806762695312px;
  width: 175.98806762695312px;
  left: 200.505859375px;
  top: 600.5059661865234375px;
  border-radius: 0px;
  border-radius: 0px;
  z-index: 1;
`;

export default function EraseButton() {
  return (
    <EraseSpace>
      <SvgEraseButton></SvgEraseButton>
    </EraseSpace>
  );
}
