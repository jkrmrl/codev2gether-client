import { registerConstants } from "../constants/registerConstants";
import { registerActionTypes } from "../types/registerTypes";
import { AuthState } from "../states/authState";

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    errorMessage: null,
    isAuthenticated: false
};

const registerReducer = (state = initialState, action: registerActionTypes) => {
    switch (action.type) {
        case registerConstants.REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: null,
                isAuthenticated: false
            }
        case registerConstants.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.token,
                errorMessage: null,
                isAuthenticated: true
            }
        case registerConstants.REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.message,
                isAuthenticated: false
            }
        default:
            return state;
    }
}

export default registerReducer;