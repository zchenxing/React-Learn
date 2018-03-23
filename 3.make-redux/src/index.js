import { createStore, stateChanger } from './store'

function renderApp(newAppState, oldAppState = {}) { // 防止 oldAppState 没有传入，所以加了默认参数 oldAppState = {}
    if (newAppState === oldAppState) return
    console.log('render app...')
    renderTitle(newAppState.title, oldAppState.title)
    renderContent(newAppState.content, oldAppState.content)
}


function renderTitle(newTitle, oldTitle = {}) {
    if (newTitle === oldTitle) return
    console.log('render title...')
    const titleDOM = document.getElementById("title")
    titleDOM.innerHTML = newTitle.text
    titleDOM.style.color = newTitle.color
}

function renderContent(newContent, oldContent) {
    if (newContent === oldContent) return
    console.log('render content...')
    const contentDOM = document.getElementById("content")
    contentDOM.innerHTML = newContent.text
    contentDOM.style.color = newContent.color
}


const store = createStore(stateChanger)
let oldState = store.getState() // 缓存旧数据

store.subscribe( () => {
    const newState = store.getState() // 数据可能变化，获取新的state
    renderApp(newState, oldState) // 把新旧的 state 传进去渲染
    oldState = newState // 渲染后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
})

renderApp(store.getState()) // 首次渲染
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色


