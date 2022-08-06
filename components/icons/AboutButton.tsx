import { SVGProps } from 'react';

const SvgAboutButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.21 75.09" {...props}>
    <g data-name="Layer 2">
      <text
        transform="translate(0 48.15)"
        fontSize={56}
        fill="#fff"
        fontFamily="Helvetica-Bold, Helvetica"
        fontWeight={700}
        data-name="About Button"
      >
        {'?'}
      </text>
    </g>
  </svg>
);

export default SvgAboutButton;
