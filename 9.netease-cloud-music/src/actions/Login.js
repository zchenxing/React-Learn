import * as types from './action-type'

export function changeLoginStatus(status) {
    return {
        type: types.LOGIN_STATUS,
        status
    }
}


export function setCurrentUser(current_user) {
    return {
        type: types.CURRENT_USER,
        current_user
    }
}