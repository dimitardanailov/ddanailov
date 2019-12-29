import styled from 'styled-components';
import img from './black.gif';

const Wrapper = styled.div`
  position: relative;

  display: block;
  background-color: #1d1d1d;
  background-image: url(${img});
`;

const Text = styled.h4`
  position: relative;

  display: block;
  color: #f9f9f9;
  text-align: center;

  text-shadow: 0 0 4px #000;

  font-size: 2.75em;
`;

function Sidebar() {
  return (
    <Wrapper>
      <Text>dimitar danailov (a.k.a mitco)</Text>
    </Wrapper>
  );
}

export default Sidebar;
