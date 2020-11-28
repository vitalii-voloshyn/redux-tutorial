import {
  DECREMENT,
  INCREMENT,
  CHANGE_THEME,
  DISABLE_BTN,
  ENABLE_BTN
} from "./type";

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

function disableBtn() {
  return {
    type: DISABLE_BTN
  }
}

function enableBtn() {
  return {
    type: ENABLE_BTN
  }
}

export function asyncIncrement() {
  return (dispatch) => {
    dispatch(disableBtn())
    setTimeout(() => {
      dispatch(increment())
      dispatch(enableBtn())
    }, 1500)
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}