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

export type authActionTypes = loginRequest | loginSuccess | loginFailure | logout;