import React from 'react';
import { Button } from '../../ui';
import { ITask } from '../../types/interfaces';
import styles from './TasksList.module.scss';
import { removeTaskAC } from '../../redux/actionCreators/taskActions';
import { useRequests } from '../../api';

const Task = ({ id, description, priority, isCompleted, userEmail }:ITask) => {
    const { taskRemoveRequest } = useRequests();

    const removeTaskHandler = async (email: string | undefined, id: string | undefined) => {
        console.log('Task Id: ', id);
        console.log({email: userEmail, taskId: id})
        const response = await taskRemoveRequest({email: userEmail, taskId: id});
        console.log('removeTaskHandler', response);
    }

    return (
        <li className={styles['item']}>
            <div className={styles['item__checkbox-box']}>
                <input 
                    type="checkbox"
                    checked={isCompleted}
                />
            </div>
            <span className={styles['item__title']}>
                {description}
            </span>
            <span className={styles['item__priority']}>
                {priority}
            </span>
            <div className={styles['item__buttons']}>
                <Button
                    // action={editTaskHandler}
                    buttonStyles={{padding: '0.5rem', marginRight: '1rem'}}
                >
                    Edit
                </Button>
                <Button
                    action={() => removeTaskHandler && removeTaskHandler(userEmail, id)}
                    buttonStyles={{padding: '0.5rem', marginRight: '1rem'}}
                >
                    Remove
                </Button>
            </div>
        </li>
    );
};

export default Task;