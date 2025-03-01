import { combineReducers } from "redux";
import authReducer from "./authReducers";
import registerReducer from "./registerReducers";

const reducers = combineReducers({
    auth: authReducer,
    register: registerReducer
});

export default reducers;