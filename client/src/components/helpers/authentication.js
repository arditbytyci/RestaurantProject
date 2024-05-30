import { setCookie, getCookie,deleteCookie } from "./cookies"
import { setLocalStorage, getLocalStorage, deleteLocalStorage } from "./localStorage";

export const setAuthentication = (token, User) => {
    setCookie('token', token);
    setLocalStorage('user', User);
}


export const isAuthenticated = () => {
    if(getCookie('token') && getLocalStorage('user')) {
        return getLocalStorage('user');
    } else {
        return false;
    }
}


export const logout = next => {
    deleteCookie('token');
    deleteLocalStorage('user');

    next();
}
