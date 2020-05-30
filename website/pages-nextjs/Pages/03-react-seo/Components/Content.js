import React from 'react'
import Prism from 'prismjs'

import Slogan from '@ddanailov/styled/Slogan'

class Content extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <div>
        <Slogan>Make your React web apps discoverable - JavaScript SEO</Slogan>
        Hello
      </div>
    )
  }
}

export default Content
