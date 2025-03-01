export const registerService = async (
    name: string,
    username: string,
    password: string,
    confirmPassword: string
) => {
    return new Promise<{ user: string; token: string }>((resolve, reject) => {
        setTimeout(() => {
            const existingUsers = [import.meta.env.VITE_MOCK_USERNAME];

            if (existingUsers.includes(username)) {
                reject(new Error("Username already exists"));
            } 
            else if (password !== confirmPassword) {
                reject(new Error("Passwords do not match"));
            } 
            else {
                resolve({ user: username, token: import.meta.env.VITE_MOCK_TOKEN });
            }
        }, 1000);
    });
};