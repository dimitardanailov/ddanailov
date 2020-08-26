import MainDesktopLayout from 'layouts/Desktop/MainDesktopLayout'
import Content from '@pages/05-multi-cursor-editing-vscode/Components/Content'

import Wrapper from '@pages/_components/DesktopWrapper'

const Page = () => {
  return (
    <Wrapper>
      <Content />
    </Wrapper>
  )
}

export default MainDesktopLayout(Page)
