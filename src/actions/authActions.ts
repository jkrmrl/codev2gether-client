import { authConstants } from "../constants/authConstants";
import { loginService } from "../services/authServices";
import { authActionTypes } from "../types/authTypes";

export const loginRequest = (): authActionTypes => ({
    type: authConstants.LOGIN_REQUEST,
});

export const loginSuccess = (user: string, token: string): authActionTypes => ({
    type: authConstants.LOGIN_SUCCESS,
    payload: { user, token },
});

export const loginFailure = (message: string): authActionTypes => ({
    type: authConstants.LOGIN_FAILURE,
    payload: { message },
});

export const logout = (): authActionTypes => ({
    type: authConstants.LOGOUT,
});

export const login = (username: string, password: string) => {
    return async (dispatch: any) => {
        dispatch(loginRequest());

        try {
            const { user, token } = await loginService(username, password);
            dispatch(loginSuccess(user, token));
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user)); 
        } catch (error: any) {
            const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
            dispatch(loginFailure(errorMessage));
        }
    };
};

export const autoLogin = () => {
    return (dispatch: any) => {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
  
      if (user && token) {
        dispatch(loginSuccess(JSON.parse(user), token));
      }
    };
};

export const logoutUser = () => {
    return (dispatch: any) => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        dispatch(logout());
    };
};