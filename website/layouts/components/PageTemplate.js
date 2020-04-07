import styled from 'styled-components'

const PageTemplate = styled.section`
  position: relative;

  display: flex;
  min-height: 100%;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export default PageTemplate
