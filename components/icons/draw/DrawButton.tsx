import { SVGProps } from 'react';
import styled from 'styled-components';

const SvgDrawButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 123.17 123.17"
    {...props}
  >
    <defs>
      <pattern
        id="DrawButton_svg__a"
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
      <g data-name="Draw Button">
        <path
          fill="#fff"
          strokeMiterlimit={10}
          strokeWidth={6}
          stroke="url(#DrawButton_svg__a)"
          d="M3 3h117.17v117.17H3z"
        />
        <path d="M49.69 25.61 25.61 49.7a3.89 3.89 0 0 0 0 5.52l31.21 31.21a3.77 3.77 0 0 0 1.58.95l35.21 11.14a4 4 0 0 0 1.19.18 3.9 3.9 0 0 0 3.72-5.08L87.39 58.4a4 4 0 0 0-1-1.59l-31.2-31.2a3.92 3.92 0 0 0-5.53 0ZM87 83l-4 4-20.34-6.47A9 9 0 0 1 64 78.8c1.92-1.92 5.54-3.09 8.2-3.52A3.9 3.9 0 0 0 75.44 72c.37-2.59 1.44-6 3.36-8a9.08 9.08 0 0 1 1.75-1.31Z" />
      </g>
    </g>
  </svg>
);

const DrawSpace = styled.svg`
  position: absolute;
  height: 175.98806762695312px;
  width: 175.98806762695312px;
  left: 200.505859375px;
  top: 200.5059661865234375px;
  border-radius: 0px;
  border-radius: 0px;
  z-index: 1;
`;

export default function DrawButton() {
  return (
    <DrawSpace>
      <SvgDrawButton></SvgDrawButton>
    </DrawSpace>
  );
}
