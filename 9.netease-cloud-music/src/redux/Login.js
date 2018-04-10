import * as types from '../actions/action-type'


const initialState = {
    status: localStorage.getItem('islogin') || false,
}

const LoginReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case types.LOGIN_STATUS:
            return {
                status: action.status
            }
        
        default:
            return state
    }
    
}

export default LoginReducer;

