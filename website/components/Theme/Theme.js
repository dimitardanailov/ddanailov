import React, {useState, useCallback} from 'react'

import {ThemeProvider} from '@material-ui/core/styles'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  preferencesReducer,
  getInitialState,
} from '@ddanailov/reducers/preferences'

import nightShiftModeThemeSetup from './configurations'
import darkColors from './configurations/dark'
import lightColors from './configurations/light'

function isLightMode(mode) {
  return mode === 'light' ? true : false
}

const Container = styled.section`
  position: relative;

  display: block;
  min-height: 100%;
  width: 100%;

  background: ${props =>
    isLightMode(props.nightShiftMode)
      ? lightColors.primary.light
      : darkColors.primary.light};
  color: ${props =>
    isLightMode(props.nightShiftMode)
      ? darkColors.primary.light
      : lightColors.primary.light};
`

function Theme({children}) {
  const [state, dispatch] = React.useState(() => getInitialState())
  const {nightShiftMode} = state

  const themeSetup = nightShiftModeThemeSetup(nightShiftMode)

  return (
    <ThemeProvider theme={themeSetup}>
      <Container nightShiftMode={nightShiftMode}>{children}</Container>
    </ThemeProvider>
  )
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
