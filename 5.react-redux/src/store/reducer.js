function createStore(reducer) {

    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }

    dispatch({})
    return { getState, dispatch, subscribe }
}


function themeReducer(state, action) {

    if(!state) return {
        themeColor: "red"
    }

    switch(action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor: action.themeColor
            }
        default:
            return state
    }
}


export {
    createStore,
    themeReducer
}