import React, {useState} from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  preferencesReducer,
  getInitialState,
} from '@ddanailov/reducers/preferences'

const Container = styled.section`
  position: relative;

  display: block;
  min-height: 100%;
  width: 100%;
`

function Theme({children}) {
  const [state, setState] = useState(() => getInitialState())
  const {nightShiftMode} = state

  return <Container>{children}</Container>
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
