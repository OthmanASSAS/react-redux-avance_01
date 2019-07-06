import { SET_AUTH } from './types';

export const setAuthentification = (isLoggedIn) => {
    return {
        type: SET_AUTH,
        payload: isLoggedIn
    }
}