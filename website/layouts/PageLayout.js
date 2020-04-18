import styled from 'styled-components'

const Container = styled.section`
  position: relative;

  min-height: 100%;
`

const PageLayout = (Page, canonical) => () => (
  <Container>
    <MainHeader canonical={canonical} />
    <Page />
  </Container>
)

export default PageLayout
