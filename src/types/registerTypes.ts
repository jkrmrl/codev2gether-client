import { registerConstants } from "../constants/registerConstants";

interface registerRequest {
    type: registerConstants.REGISTER_REQUEST;
}

interface registerSuccess {
    type: registerConstants.REGISTER_SUCCESS;
    payload: { user: string; token: string }; 
}

interface registerFailure {
    type: registerConstants.REGISTER_FAILURE;
    payload: { message: string };
}

export type registerActionTypes = registerRequest | registerSuccess | registerFailure;