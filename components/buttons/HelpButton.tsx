import styled from 'styled-components';
import SvgAboutButton from '../icons/buttons/AboutButton';

const HelpButtonSvg = styled.svg`
  position: absolute;
  height: 40.69999694824219px;
  width: 27.730010986328125px;
  left: 300.530029296875px;
  top: 143.47998046875px;
  border-radius: 0px;
  z-index: 1;
`;

export default function HelpButton() {
  const fakeOnClick = () => {
    alert('yes you clicked the help button');
  };

  return (
    <button type="button" onClick={fakeOnClick}>
      <HelpButtonSvg>
        <SvgAboutButton></SvgAboutButton>
      </HelpButtonSvg>
    </button>
  );
}
