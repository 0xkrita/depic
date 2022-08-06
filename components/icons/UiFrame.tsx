import { SVGProps } from 'react';

const SvgUiFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1062.14 979.77"
    {...props}
  >
    <defs>
      <pattern
        id="UiFrame_svg__a"
        data-name="6 dpi 90%"
        width={48}
        height={48}
        patternUnits="userSpaceOnUse"
      >
        <path fill="none" d="M0 0h48v48H0z" />
        <path
          d="M24 58.8A10.8 10.8 0 1 0 13.2 48 10.81 10.81 0 0 0 24 58.8Z"
          fill="#231f20"
        />
        <circle cx={48} cy={48} r={10.8} fill="#231f20" />
        <path
          d="M24 34.8A10.8 10.8 0 1 0 13.2 24 10.81 10.81 0 0 0 24 34.8Z"
          fill="#231f20"
        />
        <circle cx={48} cy={24} r={10.8} fill="#231f20" />
        <path
          d="M36 46.8A10.8 10.8 0 1 0 25.2 36 10.81 10.81 0 0 0 36 46.8ZM12 46.8A10.8 10.8 0 1 0 1.2 36 10.81 10.81 0 0 0 12 46.8ZM36 22.8A10.8 10.8 0 1 0 25.2 12 10.81 10.81 0 0 0 36 22.8ZM12 22.8A10.8 10.8 0 1 0 1.2 12 10.81 10.81 0 0 0 12 22.8Z"
          fill="#231f20"
        />
        <circle cy={48} r={10.8} fill="#231f20" />
        <circle cy={24} r={10.8} fill="#231f20" />
        <path
          d="M24 10.8A10.81 10.81 0 0 0 34.8 0a10.8 10.8 0 1 0-21.6 0A10.81 10.81 0 0 0 24 10.8Z"
          fill="#231f20"
        />
        <circle cx={48} r={10.8} fill="#231f20" />
        <circle r={10.8} fill="#231f20" />
      </pattern>
    </defs>
    <g data-name="Layer 2">
      <circle
        cx={949.64}
        cy={867.27}
        r={100}
        fill="#f2f2f2"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={25}
      />
      <path
        d="m0 0 247.9 7.27v96.37H920v800H0V0Zm858.91 783.64V176.36H139.07v607.28Z"
        fill="url(#UiFrame_svg__a)"
      />
    </g>
  </svg>
);

export default SvgUiFrame;
