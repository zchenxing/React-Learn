import * as types from './action-type'

export function addPlan(item) {
    return {
        type: types.ADD_PLAN,
        item
    }
}

export function deletePlan(id) {
    return {
        type: types.DELECT_PLAN,
        id
    }
}


export function show(show) {
    return {
        type: types.SHOW_PLAN,
        show
    }
}