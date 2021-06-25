import { USER_TYPES } from "../actionTypes/userTypes";

const initialState = {
    user: {},
    isLogged: false
}

export const userReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case USER_TYPES.SET:
            return {
                ...state, 
                user: action.payload,
                isLogged: true
            }
        case USER_TYPES.SET_IS_LOGGED:
            return {
                ...state,
                isLogged: action.payload
            }
        case USER_TYPES.EDIT:
            return {
                ...state, 
                user: {...state.user, ...action.payload}
            }    
        case USER_TYPES.REMOVE:
            return {
                ...state,
                user: {},
                isLogged: false
            }    
        default:
            return state;
    }
}