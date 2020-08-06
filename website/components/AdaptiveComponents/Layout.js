import PropTypes from 'prop-types'
import styled from 'styled-components'

import {mobileLayout} from '@ddanailov/styles/_sizes'

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems};
  overflow: ${props => props.overflow};

  @media (max-width: ${mobileLayout}) {
    flex-direction: column;
  }
`

function Layout({alignItems, overflow, children}) {
  return (
    <Wrapper alignItems={alignItems} overflow={overflow}>
      {children}
    </Wrapper>
  )
}

Layout.defaultProps = {
  alignItems: 'stretch',
  overflow: 'visible',
}

Layout.propTypes = {
  alignItems: PropTypes.oneOf([
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
  ]),
  overflow: PropTypes.string,
}

export default Wrapper
