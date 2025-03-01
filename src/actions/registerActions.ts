import { registerConstants } from "../constants/registerConstants";
import { registerService } from "../services/registerServices";
import { registerActionTypes } from "../types/registerTypes";

export const registerRequest = (): registerActionTypes => ({
    type: registerConstants.REGISTER_REQUEST,
});

export const registerSuccess = (user: string, token: string): registerActionTypes => ({
    type: registerConstants.REGISTER_SUCCESS,
    payload: { user, token },
});

export const registerFailure = (message: string): registerActionTypes => ({
    type: registerConstants.REGISTER_FAILURE,
    payload: { message },
});

export const register = (name: string, username: string, password: string, confirmPassword: string) => {
    return async (dispatch: any) => {
        dispatch(registerRequest());

        try {
            const { user, token } = await registerService(name, username, password, confirmPassword);
            dispatch(registerSuccess(user, token));
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user)); 
        } catch (error: any) {
            const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
            dispatch(registerFailure(errorMessage));
        }
    };
};