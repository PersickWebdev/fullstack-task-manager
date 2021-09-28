import axios from 'axios';
import { endpoints } from '../api';
import {
    IAddTaskFormData,
    ILoginFormData,
    IRegisterFormData,
    IUser,
    ITaskRemoveData
} from '../types/interfaces';

const useRequests = () => {
    // Auth requests:
    const signInRequest = async (formData: ILoginFormData) => {
        return await axios.post(endpoints.signIn, formData);
    };

    const signUpRequest = async (formData: IRegisterFormData) => {
        return await axios.post(endpoints.signUp, formData);
    };

    // User requests:
    const userEditRequest = async (formData: IUser) => {
        return await axios.patch(endpoints.userEdit, formData);
    };

    const userDeleteRequest = async (userId: {}) => {
        return await axios.delete(endpoints.userDelete, {data: {userId}});
    };

    // Tasks requests:
    const taskAddRequest = async (formData: IAddTaskFormData) => {
        return await axios.post(endpoints.tasksAdd, formData);
    };

    const taskEditRequest = async (formData: IAddTaskFormData) => {
        return await axios.post(endpoints.tasksEdit, formData);
    };

    // const taskRemoveRequest = async (taskId: { data: { taskId: string | undefined } }) => {
    //     return await axios.delete(endpoints.tasksDelete, {data: {taskId}});
    // }

    const taskRemoveRequest = async (data: { email: string | undefined; taskId: string | undefined }) => {
        // @ts-ignore
        return await axios.delete(endpoints.tasksDelete, data);
    }

    const taskRemoveAllRequest = async (data: { email: string | undefined }) => {
        // @ts-ignore
        return await axios.delete(endpoints.tasksDeleteAll, data);
    }


    return {
        signInRequest,
        signUpRequest,
        userEditRequest,
        userDeleteRequest,
        taskAddRequest,
        taskEditRequest,
        taskRemoveRequest,
        taskRemoveAllRequest
    };
}

export default useRequests;