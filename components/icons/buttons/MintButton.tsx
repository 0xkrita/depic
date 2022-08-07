import { SVGProps } from 'react';

const SvgMintButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 225" {...props}>
    <defs>
      <pattern
        id="MintButton_svg__a"
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
      <g data-name="MINT Button">
        <circle
          cx={112.5}
          cy={112.5}
          r={100}
          fill="#f2f2f2"
          strokeMiterlimit={10}
          strokeWidth={25}
          stroke="url(#MintButton_svg__a)"
        />
        <text
          transform="translate(61.59 127.05)"
          fontSize={36}
          fontFamily="Helvetica-Bold, Helvetica"
          fontWeight={700}
        >
          {'MINT!'}
        </text>
      </g>
    </g>
  </svg>
);

export default SvgMintButton;
