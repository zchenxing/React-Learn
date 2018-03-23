function createStore(stateChanger) {
    let state = null
    const listeners = []
    // const subscribe = (listener) => listeners.push(listener)
    const subscribe = (listener) => {
       return listeners.push(listener)
    }
    // 表示应用程序状态
    const getState = () => state
    // 应用程序状态会根据 action 发生什么变化
    const dispatch = (action) => {
        state = stateChanger(state, action) // 覆盖原对象
        // 7遍历 listeners 数组里面的函数，然后一个个地去调用
        listeners.forEach((listeners) => listeners() )
    }
    dispatch({}) // 初始化 state

    return { getState, dispatch, subscribe }
}


function stateChanger(state, action) {

    if(!state) {
        return {
            title: {
                text: 'React.js title',
                color: 'red',
            },
            content: {
                text: 'React.js content',
                color: 'blue'
            }
        }
    }

    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text   
                }
            }
        case 'UPDATE_TITLE_COLOR': 
            return {
                ...state,
                title: {
                    ...state.title,
                    color: state.color
                }
            }
        default:
            return state
    }
}

export {
    createStore,
    stateChanger
}