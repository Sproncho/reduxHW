import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions";
import {CHANGE_FOLLOWERS, CHANGE_FOLLOWING} from "../actions/statsAction";

const defaultState = {
    user: {
        name: 'Monster',
        avatar: 'https://www.gravatar.com/avatar/0?d=monsterid'
    },
    stats: {
        followers: 0,
        following: 0
    }
}

export const twitterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, user: {...state.user, name: action.payload || state.user.name}}
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}}
        case CHANGE_FOLLOWERS:
            return {...state, stats: {...state.stats, followers: state.stats.followers + action.payload}}
        case CHANGE_FOLLOWING:
            return {...state, stats: {...state.stats, following: state.stats.following + action.payload}}
        default:
            return state
    }
}