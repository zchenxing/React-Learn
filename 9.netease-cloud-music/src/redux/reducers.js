import { combineReducers } from 'redux'

import loginReducer from './Login'

const reducers = combineReducers({
    loginReducer: loginReducer
})


export default reducers;