import styled from 'styled-components'

const Wrapper = styled.h4`
  position: relative;

  display: block;
  font-size: 1.6rem;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
  }
`

function SubTitle({children}) {
  return <Wrapper>{children}</Wrapper>
}

export default SubTitle
