import { CHANGE_THEME, DISABLE_BTN, ENABLE_BTN } from "../actions/type"

const initialState = {
  value: 'ligth',
  disabled: false
}

export function themeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state, value: action.payload
      };
    case DISABLE_BTN:
      return {
        ...state, disabled: true
      };
    case ENABLE_BTN:
      return {
        ...state, disabled: false
      }
    default:
      return state
  }
}