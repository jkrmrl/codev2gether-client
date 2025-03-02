import { authConstants } from "../constants/authConstants";

interface loginRequest {
    type: authConstants.LOGIN_REQUEST;
}

interface loginSuccess {
    type: authConstants.LOGIN_SUCCESS;
    payload: { user: string; token: string };
}

interface loginFailure {
    type: authConstants.LOGIN_FAILURE;
    payload: { message: string };
}

interface logout {
    type: authConstants.LOGOUT;
}

interface registerRequest {
    type: authConstants.REGISTER_REQUEST;
}

interface registerSuccess {
    type: authConstants.REGISTER_SUCCESS;
    payload: { user: string; token: string }; 
}

interface registerFailure {
    type: authConstants.REGISTER_FAILURE;
    payload: { message: string };
}

export type authActionTypes = 
loginRequest |
loginSuccess | 
loginFailure | 
registerRequest | 
registerSuccess | 
registerFailure |
logout;