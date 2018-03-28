import * as types from '../actions/action-type'
import data from '../data/db'

const initialState = {
    show: false, // 是否显示弹出
    planlist: data // 初始化数据
}

const planReducer = (state = initialState, action) => {

    let list = state.planlist;
    
    switch (action.type) {
        case types.ADD_PLAN:
            list.push(action.item);
            return {
                ...state,
                planlist: list
            }

        case types.DELECT_PLAN:
            let newList = list.filter( (item) => Number(item.id) !== Number(action.id) )
            return {
                ...state,
                planlist: newList
            }
        
            case types.SHOW_PLAN:
                return {
                    ...state,
                    show: action.show
                }
        default:
            return state
    }
}


export default planReducer