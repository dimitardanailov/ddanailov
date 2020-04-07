import styled from 'styled-components'
import img from './black.gif'

const Wrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: #1d1d1d;
  background-image: url(${img});

  padding: 1rem;
`

export default Wrapper
