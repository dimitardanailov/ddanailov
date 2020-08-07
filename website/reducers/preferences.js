import produce from 'immer'

export const preferencesRecipe = (draft, action) => {
  switch (action.type) {
    case 'SET_NIGHT_SHIFT_MODE':
      const {nightShiftMode} = action
      draft.nightShiftMode = nightShiftMode
      break
    default:
      return getInitialState()
  }
}

export const preferencesReducer = produce(preferencesRecipe)

export function getInitialState() {
  return {
    nightShiftMode: 'light',
  }
}
