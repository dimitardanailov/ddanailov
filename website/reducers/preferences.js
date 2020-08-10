import produce from 'immer'

export const preferencesRecipe = (draft, action) => {
  switch (action.type) {
    case 'SET_NIGHT_SHIFT_MODE':
      const {nightShiftMode} = action
      draft.nightShiftMode = nightShiftMode
      break
    case 'GET_NIGHT_SHIFT_MODE':
      return draft.nightShiftMode
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
