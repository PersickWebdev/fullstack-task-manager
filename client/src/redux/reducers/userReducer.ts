import { TASK_TYPES, USER_TYPES } from '../actionTypes';

const initialState = {
    user: {
        firstName: '',
        lastName: '',
        age: null,
        email: '',
        password: '',
        tasks: []
    },
    isLogged: false
}

export const userReducer = (state = initialState, action: any) => {
    console.log('Action Payload: ', action.payload);
    switch(action.type) {
        // User section:
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
                user: { ...state.user, ...action.payload }
            }
        case USER_TYPES.REMOVE:
            return {
                ...state,
                user: {},
                isLogged: false
            }

        // Tasks section:
        case TASK_TYPES.ADD:
            console.log('TASK_TYPES.ADD', action.payload)
            console.log('TASK_TYPES.ADD - state: ', state);
            return {
                ...state,
                user: { ...state.user, tasks: [ ...state.user.tasks, ...action.payload ] },
            }
        default:
            return state;
    }
}