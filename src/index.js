
import { store } from './store'
import { asyncIncrement, changeTheme, decrement, increment } from './store/actions/actions'
import './styles/styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')


addBtn.addEventListener('click', onAddBtnClick)
subBtn.addEventListener('click', onSubBtnClick)
asyncBtn.addEventListener('click', onAsynckBtnClick)
themeBtn.addEventListener('click', onThemeBtnClick)


function onAddBtnClick() {
  store.dispatch(increment())
}

function onSubBtnClick() {
  store.dispatch(decrement())
}

function onAsynckBtnClick() {
  store.dispatch(asyncIncrement())
}

function onThemeBtnClick() {
  const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light'
  store.dispatch(changeTheme(newTheme))
}

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counter
  document.body.className = state.theme.value;
  [addBtn, subBtn, asyncBtn, themeBtn].forEach(btn => {
    btn.disabled = state.theme.disabled
  })
})

store.dispatch({ type: 'INIT_APPLICATION' })