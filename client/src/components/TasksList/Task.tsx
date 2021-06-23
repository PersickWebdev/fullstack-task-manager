import React from 'react';
import { ITask } from '../../types/interfaces';
import styles from './TasksList.module.scss';

const Task = ({ id, title, priority, isCompleted }:ITask) => {
    return (
        <li className={styles['item']}>
            <div className={styles['item__checkbox-box']}>
                <input 
                    type="checkbox"
                    checked={isCompleted}
                />
            </div>
            <span className={styles['item__title']}>
                {title}
            </span>
            <span className={styles['item__priority']}>
                {priority}
            </span>
            <div className={styles['item__buttons']}>
                <input type="button" value="Edit"/>
                <input type="button" value="Remove"/>
            </div>
        </li>
    );
};

export default Task;