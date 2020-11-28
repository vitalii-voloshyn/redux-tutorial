import './styles/styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

let state = 0


addBtn.addEventListener('click', onAddBtnClick)
subBtn.addEventListener('click', onSubBtnClick)
asyncBtn.addEventListener('click', onAsynckBtnClick)
themeBtn.addEventListener('click', onThemeBtnClick)

function onAddBtnClick() {
  state++
  render()
}

function onSubBtnClick() {
  state--
  render()
}

function onAsynckBtnClick() {
  setTimeout(() => {
    state++
    render()
  }, 1500)
}

function onThemeBtnClick() {
  document.body.classList.toggle('dark')
}

function render() {
  counter.textContent = state.toString()
}

render()



