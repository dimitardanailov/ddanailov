import dynamic from 'next/dynamic'

import styled from 'styled-components'

import useLocalStorageState from '@ddanailov/hooks/useLocalStorageState'

import BasicFigure from '@ddanailov/styled/images/Figure'

import {DEFAULT_STATE, DARK_STATE} from './States'

const DefaultStateIcon = dynamic(() => import('@material-ui/icons/Brightness7'))
const DarkStateIcon = dynamic(() => import('@material-ui/icons/Brightness4'))

const Figure = styled(BasicFigure)`
  cursor: pointer;
`

function NightShiftModeToggleButton() {
  const [nightShiftMode, setNightShiftMode] = useLocalStorageState(
    'night-shift',
    DEFAULT_STATE,
  )

  const onClickListener = () => {
    if (nightShiftMode === DEFAULT_STATE) {
      setNightShiftMode(DARK_STATE)
    }

    if (nightShiftMode === DARK_STATE) {
      setNightShiftMode(DEFAULT_STATE)
    }
  }

  return (
    <Figure onClick={onClickListener} size="24px">
      {nightShiftMode === DEFAULT_STATE ? (
        <DefaultStateIcon fontSize="medium" titleAccess="Activate dark mode" />
      ) : (
        <DarkStateIcon fontSize="medium" titleAccess="Activate default mode" />
      )}
    </Figure>
  )
}

export default NightShiftModeToggleButton
