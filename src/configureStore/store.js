import {legacy_createStore as createStore,combineReducers} from "@reduxjs/toolkit";
import {twitterReducer} from "../reducers/twitterReducer";
import {statsReducer} from "../reducers/statsReducer"
import {userReducer} from "../reducers/userReducer";

const rootReducer = combineReducers({
    stats:statsReducer,
    user:userReducer
})
export const store = createStore(rootReducer)