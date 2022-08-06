import { SVGProps } from 'react';

const SvgFillButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 123.17 123.17"
    {...props}
  >
    <defs>
      <pattern
        id="FillButton_svg__a"
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
      <g data-name="Fill Button">
        <path
          fill="#fff"
          strokeMiterlimit={10}
          strokeWidth={6}
          stroke="url(#FillButton_svg__a)"
          d="M3 3h117.17v117.17H3z"
        />
        <path d="M61.58 21.18a7.05 7.05 0 0 0-6 3.3C47.15 37.7 32.72 61.9 32.72 73.13a28.86 28.86 0 1 0 57.72 0C90.44 61.9 76 37.7 67.56 24.48a7.06 7.06 0 0 0-5.98-3.3Z" />
      </g>
    </g>
  </svg>
);

export default SvgFillButton;
