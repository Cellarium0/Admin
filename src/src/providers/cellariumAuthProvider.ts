import { API_URL } from "../config";


type loginFormType = {
    username: string;
    password: string;
};

const scope = "default admin";

const cellariumAuthProvider = {
    login: ({ username, password }: loginFormType) =>  {
        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('scope', scope);
        const request = new Request(
            `${API_URL}/security/token/username`, {
            method: 'POST',
            body: formData,
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('admin_token', auth.access_token);
                localStorage.setItem('permissions', scope);
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    logout: () => {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('admin_token') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    },
};

export default cellariumAuthProvider;
