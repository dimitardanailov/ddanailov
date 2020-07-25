import MainDesktopLayout from 'layouts/Desktop/MainDesktopLayout'
import Content from '@pages/03-react-seo/Components/Content'

import Wrapper from '@pages/_components/DesktopWrapper'

const Page = () => {
  return (
    <Wrapper>
      <Content />
    </Wrapper>
  )
}

export default MainDesktopLayout(Page)
