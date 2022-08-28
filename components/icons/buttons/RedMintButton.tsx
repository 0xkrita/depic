import { SVGProps } from 'react';

const SvgRedmintbutton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226 226" {...props}>
    <defs>
      <pattern
        id="REDMINTBUTTON_svg__a"
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
          cx={113}
          cy={113}
          r={112.5}
          fill="#fff"
          strokeMiterlimit={10}
          stroke="url(#REDMINTBUTTON_svg__a)"
        />
        <path
          d="M113 225.5A112.5 112.5 0 1 1 225.5 113 112.63 112.63 0 0 1 113 225.5Zm0-200a87.5 87.5 0 1 0 87.5 87.5A87.6 87.6 0 0 0 113 25.5Z"
          strokeMiterlimit={10}
          fill="url(#REDMINTBUTTON_svg__a)"
          stroke="url(#REDMINTBUTTON_svg__a)"
        />
        <circle cx={113} cy={113} r={94.7} fill="#ff3f45" />
        <text
          fontSize={40.23}
          fill="#fff"
          fontFamily="Helvetica-Bold, Helvetica"
          fontWeight={700}
        >
          <tspan x={30.41} y={131.37}>
            {'MINTED!'}
          </tspan>
        </text>
      </g>
    </g>
  </svg>
);

export default SvgRedmintbutton;
