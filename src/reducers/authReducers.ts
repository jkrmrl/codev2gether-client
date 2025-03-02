import { authConstants } from "../constants/authConstants";
import { authActionTypes } from "../types/authTypes";
import { AuthState } from "../states/authState";

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    errorMessage: null,
    isAuthenticated: false
};

const authReducer = (state = initialState, action: authActionTypes) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: null,
                isAuthenticated: false
            }
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.token,
                errorMessage: null,
                isAuthenticated: true
            }
        case authConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.message,
                isAuthenticated: false
            }
        case authConstants.LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false
            };
        case authConstants.REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: null,
                isAuthenticated: false
            }
        case authConstants.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.token,
                errorMessage: null,
                isAuthenticated: true
            }
        case authConstants.REGISTER_FAILURE:
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

export default authReducer;