import styled from 'styled-components';
import img from './black.gif';

const Wrapper = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #1d1d1d;
  background-image: url(${img});

  padding: 10px;
`;

const Text = styled.h4`
  position: relative;

  display: block;
  text: align-center;
  margin: 0;
  padding: 0;

  color: #f9f9f9;
  text-align: center;

  text-shadow: 0 0 4px #000;

  font-size: 2.75rem;
`;

function Sidebar() {
  return (
    <Wrapper>
      <Text>&lt;ddanailov&nbsp;&frasl;&gt;</Text>
    </Wrapper>
  );
}

export default Sidebar;
