import { SVGProps } from 'react';
import styled from 'styled-components';

const SvgModalPopupFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={1266}
    height={798}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1266 798"
    {...props}
  >
    <path
      d="M15 15v768h868V635h368V15H15Z"
      fill="#F4F2F2"
      stroke="#000"
      strokeWidth={30}
    />
  </svg>
);

const PopUpStyled = styled.svg`
  height: 768px;
  width: 1236px;
  left: 401px;
  top: 163px;
  border-radius: 0px;
  z-index: -1;
`;

export default function PopupFrame() {
  // return <PopUpStyled>
  return <SvgModalPopupFrame></SvgModalPopupFrame>;
  // </PopUpStyled>
}
