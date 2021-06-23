import { USER_TYPES } from '../actionTypes/userTypes';

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