import MainDesktopLayout from 'layouts/Desktop/MainDesktopLayout'
import Content from '@pages/03-react-seo/Components/Content'

import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;

  display: block;
  width: 70%;
  margin: 0 auto;
`

const Page = () => {
  return (
    <Wrapper>
      <Content />
    </Wrapper>
  )
}

export default MainDesktopLayout(Page)
