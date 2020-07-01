import PropTypes from 'prop-types'

import styled from 'styled-components'
import {secondary} from 'styles/colors/light'

const Wrapper = styled.blockquote`
  position: relative;

  display: block;
  border: 1px solid ${secondary.main};
`

function BlockQuote({children}) {
  return <Wrapper>{children}</Wrapper>
}

BlockQuote.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlockQuote
