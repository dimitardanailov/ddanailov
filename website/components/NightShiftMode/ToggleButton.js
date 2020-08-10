import React, {useCallback} from 'react'

import dynamic from 'next/dynamic'

import styled from 'styled-components'

import BasicFigure from '@ddanailov/styled/images/Figure'

import {DEFAULT_STATE, DARK_STATE} from './States'

const DefaultStateIcon = dynamic(() => import('@material-ui/icons/Brightness7'))
const DarkStateIcon = dynamic(() => import('@material-ui/icons/Brightness4'))

import {
  preferencesReducer,
  getInitialState,
} from '@ddanailov/reducers/preferences'

const Figure = styled(BasicFigure)`
  cursor: pointer;
`

function nightShiftModeCallBack() {
  if (!window.localStorage.getItem('night-shift')) return getInitialState()

  return preferencesReducer(getInitialState(), {
    type: 'SET_NIGHT_SHIFT_MODE',
    nightShiftMode: window.localStorage.getItem('night-shift'),
  })
}

function NightShiftModeToggleButton() {
  const [preferences, setNightShiftMode] = React.useState(() =>
    nightShiftModeCallBack(),
  )

  const dispatch = useCallback(action => {
    setNightShiftMode(state => preferencesReducer(state, action))
    window.localStorage.setItem('night-shift', action.nightShiftMode)
  }, [])

  const onClickListener = () => {
    if (preferences.nightShiftMode === DEFAULT_STATE) {
      dispatch({
        type: 'SET_NIGHT_SHIFT_MODE',
        nightShiftMode: DARK_STATE,
      })
    }

    if (preferences.nightShiftMode === DARK_STATE) {
      dispatch({
        type: 'SET_NIGHT_SHIFT_MODE',
        nightShiftMode: DEFAULT_STATE,
      })
    }
  }

  return (
    <Figure onClick={onClickListener} size="24px">
      {preferences.nightShiftMode === DEFAULT_STATE ? (
        <DefaultStateIcon titleAccess="Activate dark mode" />
      ) : (
        <DarkStateIcon titleAccess="Activate default mode" />
      )}
    </Figure>
  )
}

export default NightShiftModeToggleButton
