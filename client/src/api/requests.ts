import axios from 'axios';
import { endpoints } from '../api';
import {
    IAddTaskFormData,
    ILoginFormData,
    IRegisterFormData,
    IUser
} from '../types/interfaces';

const useRequests = () => {

    const signInRequest = async (formData: ILoginFormData) => {
        return await axios.post(endpoints.signIn, formData);
    };

    const signUpRequest = async (formData: IRegisterFormData) => {
        return await axios.post(endpoints.signUp, formData);
    };

    const userEditRequest = async (formData: IUser) => {
        return await axios.patch(endpoints.userEdit, formData);
    };

    const userDeleteRequest = async (userId: {}) => {
        return await axios.delete(endpoints.userDelete, {data: {userId}});
    };

    const taskAddRequest = async (formData: IAddTaskFormData) => {
        return await axios.post(endpoints.tasksAdd, formData);
    };

    return {
        signInRequest,
        signUpRequest,
        userEditRequest,
        userDeleteRequest,
        taskAddRequest
    };
}

export default useRequests;