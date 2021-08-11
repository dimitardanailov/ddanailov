import PropTypes from 'prop-types'
import styled from 'styled-components'

const BlockQuote = styled.blockquote`
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;

  font-style: italic;

  &:before,
  &:after {
    color: #ccc;
    font-size: 4em;
    line-height: 0.1em;
    vertical-align: -0.4em;
  }

  &:before {
    content: open-quote;
    margin-right: 0.1em;
  }

  &:after {
    content: close-quote;
    margin-left: 0;
  }
`

function BlockQuoteComponent({children}) {
  return <BlockQuote>{children}</BlockQuote>
}

BlockQuoteComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlockQuoteComponent
