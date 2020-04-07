import PropTypes from 'prop-types'

import styled from 'styled-components'

const Wrapper = styled.span`
  position: relative;

  font-style: italic;
  display: inline-block;
`

function PersonInfo({children}) {
  return (
    <Wrapper>
      {'-- '}
      {children}
    </Wrapper>
  )
}

PersonInfo.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PersonInfo
