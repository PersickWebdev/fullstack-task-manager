import { TASK_TYPES } from '../actionTypes';
import { ITask } from '../../types/interfaces';

export const addTaskAC = (taskObject: ITask) => {
    console.log('ACTion')
    return {
        type: TASK_TYPES.ADD,
        payload: taskObject
    }
}

export const editTaskAC = (taskObject: {}) => {
    return {
        type: TASK_TYPES.EDIT,
        payload: taskObject
    }
}

export const removeTaskAC = (taskId: number) => {
    return {
        type: TASK_TYPES.REMOVE,
        payload: taskId
    }
}
