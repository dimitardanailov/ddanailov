import MainMobileLayout from '@ddanailov/layouts/Mobile/MainMobileLayout'

import {MDXProvider} from '@mdx-js/react'
import Test from './Content.mdx'

const BlogPageMobile = () => (
  <>
    <div>Hello world</div>
    <div>Hello world</div>
    <MDXProvider>
      <Test />
    </MDXProvider>
  </>
)

export default MainMobileLayout(BlogPageMobile)
