import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions";


const defaultState = {
    name: 'Monster',
    avatar: 'https://www.gravatar.com/avatar/0?d=monsterid'
}

export const userReducer = (state = defaultState, action) => {
    console.log("user",state,action)
    switch (action.type) {
        case CHANGE_NAME:
            return {  ...state, name: action.payload || state.name}
        case CHANGE_AVATAR:
            return {...state, avatar: action.payload || state.avatar}
        default:
            return state
    }
}