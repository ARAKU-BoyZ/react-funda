import { combineReducers } from "redux"
import { authReducer } from "./reducers/authReducer"
import { customerReducer } from "./reducers/customerReducers"


export const reducers = combineReducers({
    auth: authReducer,
    customer: customerReducer,
})