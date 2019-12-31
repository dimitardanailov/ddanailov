import styled from 'styled-components';
import img from './black.gif';

const Wrapper = styled.section`
  position: relative;

  display: block;
  background-color: #1d1d1d;
  background-image: url(${img});
`;

const Text = styled.h4`
  position: relative;

  display: block;
  margin: 0;
  color: #f9f9f9;
  text-align: center;

  text-shadow: 0 0 4px #000;

  font-size: 2.75rem;
`;

function Sidebar() {
  return (
    <Wrapper>
      <Text>&lt;danailov&nbsp;&frasl;&gt;</Text>
    </Wrapper>
  );
}

export default Sidebar;
