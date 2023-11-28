import { AuthProvider } from 'react-admin';

const authProvider: AuthProvider = {
    login: ({ username }) => {
        localStorage.setItem('username', username);
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.resolve(),
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: 'Jane Doe',
        }),
};

export default authProvider;