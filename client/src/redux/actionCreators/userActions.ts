import { USER_TYPES } from '../actionTypes';

export const setUserAC = (userObject: any) => {
    return {
        type: USER_TYPES.SET,
        payload: userObject
    }
}

export const editUserAC = (userObject: any) => {
    return {
        type: USER_TYPES.EDIT,
        payload: userObject
    }
}

export const removeUserAC = () => {
    return {
        type: USER_TYPES.REMOVE
    }
}

export const setIsLogged = (booleanValue: boolean) => {
    return {
        type: USER_TYPES.SET_IS_LOGGED,
        payload: booleanValue
    }
}