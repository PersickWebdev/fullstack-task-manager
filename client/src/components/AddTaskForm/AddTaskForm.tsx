import React, { useState } from 'react';
import styles from './AddTaskForm.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Select, Button } from '../../ui';
import { useUtils } from '../../utils';
import { useRequests } from '../../api';
import { IAddTaskFormData } from '../../types/interfaces';
import { addTaskAC } from '../../redux/actionCreators/taskActions';

const AddTaskForm = () => {
    const dispatch = useDispatch();
    const { taskAddRequest } = useRequests();
    // @ts-ignore
    const { user } = useSelector((state) => state.userReducer);
    const { generateId } = useUtils();
    const [ formData, setFormData ] = useState({} as IAddTaskFormData);

    const collectFormData = (name: string, value: string) => {
        setFormData(() => {
            return {
                ...formData,
                email: user.email,
                taskId: generateId(),
                [name]: value,
                isCompleted: false
            }
        });
    };

    const submitHandler = async (event: MouseEvent) => {
        event.preventDefault();
        try {
            const response = await taskAddRequest(formData);
            if (response.status === 201) {
                console.log('Add Task - Response: ', response?.data?.addedTask);
                // TODO: No reaction to dispatch!
                dispatch(addTaskAC(response?.data?.addedTask));
            } else if (response.status === 404) {
                console.log('Add Task - Response: ', response?.data?.message);
            } else {
                console.log('Some other error', response);
            }
        } catch (error) {
            console.log('Response - error: ', error?.data?.message);
        }
    };

    return (
        <form className={styles['form']}>
            <div className={styles['form__input-box']}>
                <Input
                    name="description"
                    placeholder="Enter task description ..."
                    inputStyles={{width: '99.5%'}}
                    action={collectFormData}
                />
            </div>
            <Select
                selectStyles={{width: '20%'}}
                action={collectFormData}
            />
            <div className={styles['form__buttons']}>
                <Button
                    buttonStyles={{width: '100%'}}
                    action={submitHandler}
                >
                    Add
                </Button>
            </div>
        </form>
    );
};

export default AddTaskForm;