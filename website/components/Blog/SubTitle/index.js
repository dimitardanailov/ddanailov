import styled from '@ddanailov/components/Blog/SubTitle/styled-components'

const Wrapper = styled.h4`
  position: relative;

  display: block;
  font-size: 1.6rem;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
  }
`

function SubTitles({children}) {
  return <Wrapper>{children}</Wrapper>
}

export default SubTitles
