import styled from 'styled-components'
import img from './black.gif'

const Wrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #1d1d1d;
  background-image: url(${img});

  padding: 10px;
`

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
`

const Box = styled.div`
  position: relative;

  display: block;
  width: 280px;
  border-radius: 2.5rem;
  padding: 20px;
  background-color: white;

  @media (max-width: 768px) {
    display: none;
  }
`

const Pre = styled.pre`
  width: 100%;
  border: 0;
  background-color: white;
  color: black;
  font-size: 13px;
  margin: 0;
  white-space: pre-wrap;
`

function Info() {
  var title = String.raw`$ cat info.json {
  'name': 'Dimitar Danailov',
  'work': 'Contractor',
  'location': 'Earth'
  'interests': [
    'Humanity',
    'Mentorship',
    'Servant Leadership',
    'Open Source'
  ],
  'technical interests': [
    'Software Archictures',
    'Clean Code',
    'React',
    'State machines',
    'Redux',
    'Golang',
    'Cloud',
    'Kubernetes'
  ],
}

$`

  return (
    <Box>
      <Pre>{title}</Pre>
    </Box>
  )
}

function Sidebar() {
  return (
    <Wrapper>
      <Text>&lt;ddanailov&nbsp;&frasl;&gt;</Text>
      <Info />
    </Wrapper>
  )
}

export default Sidebar
