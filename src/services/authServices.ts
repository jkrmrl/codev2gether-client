export const loginService = async (username: string, password: string) => {
    return new Promise<{ user: string; token: string }>((resolve, reject) => {
        setTimeout(() => {
            if (username === import.meta.env.VITE_MOCK_USERNAME && password === import.meta.env.VITE_MOCK_PASSWORD) {
                resolve({ user: import.meta.env.VITE_MOCK_USERNAME, token: import.meta.env.VITE_MOCK_TOKEN });
            } else {
                reject(new Error("Invalid username or password"));
            }
        }, 1000);
    });
};