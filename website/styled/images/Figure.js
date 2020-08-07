import styled from 'styled-components'

const Figure = styled.figure`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;

  width: ${props => props.size};
  height: ${props => props.size};

  & > svg {
    width: 100%;
    height: 100%;
  }
`

export default Figure
