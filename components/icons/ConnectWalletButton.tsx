import { SVGProps } from 'react';

const SvgConnectWalletButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 275.27 121.26"
    {...props}
  >
    <defs>
      <pattern
        id="ConnectWalletButton_svg__a"
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
      <path
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={8}
        d="M4 104.34V26.16L271.27 4.34v112.73L4 104.34z"
      />
      <path
        fill="#fff"
        strokeMiterlimit={10}
        strokeWidth={8}
        stroke="url(#ConnectWalletButton_svg__a)"
        d="M4 104.34V26.16L271.27 4.34v112.73L4 104.34z"
      />
      <text
        transform="translate(45.91 61.34)"
        fontSize={36}
        fontFamily="Helvetica-Bold, Helvetica"
        fontWeight={700}
      >
        {'CONNECT'}
        <tspan x={0} y={31} letterSpacing="-.05em">
          {'W'}
        </tspan>
        <tspan x={32.01} y={31}>
          {'ALLET'}
        </tspan>
      </text>
    </g>
  </svg>
);

export default SvgConnectWalletButton;
