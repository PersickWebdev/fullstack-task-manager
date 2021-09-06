import React from 'react';
import { Button } from '../../ui';
import { ITask } from '../../types/interfaces';
import styles from './TasksList.module.scss';

const Task = ({ id, description, priority, isCompleted }:ITask) => {
    const editTaskHandler = () => {
        console.log('Clicked');
    }

    const removeTaskHandler = () => {
        console.log('Clicked');
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
                    action={editTaskHandler}
                    buttonStyles={{padding: '0.5rem', marginRight: '1rem'}}
                >
                    Edit
                </Button>
                <Button
                    action={removeTaskHandler}
                    buttonStyles={{padding: '0.5rem', marginRight: '1rem'}}
                >
                    Remove
                </Button>
            </div>
        </li>
    );
};

export default Task;