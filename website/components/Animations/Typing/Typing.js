import Typed from 'typed.js'
import words from './words'

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <>
        <div>
          <span
            style={{whiteSpace: 'pre'}}
            ref={el => {
              this.el = el
            }}
          />
        </div>
      </>
    )
  }
}

export default Typing
