import {createTheme} from '@material-ui/core/styles'

import {
  DEFAULT_STATE,
  DARK_STATE,
} from '@ddanailov/components/NightShiftMode/States'

import lightColors from './light'
import darkColors from './dark'

function nightShiftModeThemeSetup(nightShiftMode) {
  const palletState =
    nightShiftMode === DEFAULT_STATE ? DEFAULT_STATE : DARK_STATE

  return createTheme({
    palette: {
      type: palletState,
      primary: {
        main: lightColors.primary.light,
      },
      secondary: {
        main: darkColors.primary.dark,
      },
    },
  })
}

export default nightShiftModeThemeSetup
