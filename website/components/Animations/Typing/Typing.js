import Typed from 'typed.js'

import styled from 'styled-components'
import words from './words'

const Element = styled.span`
  font-size: 2rem;
  color: #000;
  text-align: center;
`

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: '|',
    }
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <>
        <Element
          style={{whiteSpace: 'pre'}}
          ref={el => {
            this.el = el
          }}
        />
      </>
    )
  }
}

export default Typing
