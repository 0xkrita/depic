import { SVGProps } from 'react';

const SvgLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 225" {...props}>
    <defs>
      <pattern
        id="READYTOMINTBUTTON_svg__a"
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
        <circle cx={112.5} cy={112.5} r={100} fill="#f2f2f2" />
        <path
          d="M112.5 225A112.5 112.5 0 1 1 225 112.5 112.63 112.63 0 0 1 112.5 225Zm0-200a87.5 87.5 0 1 0 87.5 87.5A87.6 87.6 0 0 0 112.5 25Z"
          fill="url(#READYTOMINTBUTTON_svg__a)"
        />
        <text
          fontSize={45.23}
          fill="#000"
          fontFamily="Helvetica-Bold, Helvetica"
          fontWeight={700}
        >
          <tspan x={53.41} y={131.37}>
            {'.........'}
          </tspan>
        </text>
      </g>
    </g>
  </svg>
);

export default SvgLoading;
