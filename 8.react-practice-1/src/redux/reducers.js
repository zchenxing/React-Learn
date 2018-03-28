import { combineReducers } from 'redux'

import planReducer from './planlist'

let reducers = combineReducers({
    planReducer: planReducer
})


export default reducers