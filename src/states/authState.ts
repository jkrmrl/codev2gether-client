export interface AuthState {
    user: string | null;
    token: string | null;
    loading: boolean;
    errorMessage: string | null;
};