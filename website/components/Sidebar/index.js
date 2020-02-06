import styled from 'styled-components';
import img from './black.gif';

const Wrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
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

const Box = styled.div`
  position: relative;

  display: block;
  width: 75%;

  padding: 2rem 2rem;

  background-color: white;
`;

const info = JSON.stringify({
  "name": "Dimitar Danailov",
  "email": "dimityr.danailov@gmail.com"
})

function Info() {
  return (
    <Box>
      <pre>
        {info}
      </pre>
    </Box>
  )
}

function Sidebar() {
  return (
    <Wrapper>
      <Text>&lt;ddanailov&nbsp;&frasl;&gt;</Text>
    </Wrapper>
  );
}

export default Sidebar;
