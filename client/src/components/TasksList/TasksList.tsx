import React from 'react';
import styles from './TasksList.module.scss';
import { useSelector } from 'react-redux';
import { AddTaskForm, Task } from '../../components';
import { IUserReducer } from '../../types/interfaces';

interface ITasksList {
    userReducer: IUserReducer
}

const TasksList = () => {
    const { user } = useSelector(({ userReducer }:ITasksList) => userReducer);
    // const editTaskHandler = () => {
    //     console.log('Clicked');
    // }

    const mappedTasks = user.tasks.map((task, index) => {
        return (
            <Task 
                key={`${task.description}_${index}`}
                id={`${task.description}_${index}`}
                description={task.description}
                priority={task.priority}
                isCompleted={task.isCompleted}
                userEmail={user?.email}
            />
        )
    });

    return (
        <div className={styles['tasks-list']}>
            <AddTaskForm />
            <ul className={styles['tasks-list__list']}>
                {mappedTasks.length > 0
                    ?
                    mappedTasks
                    :
                    <p className={styles['tasks-list__notification']}>
                        Your task list is empty
                    </p>
                }
            </ul>
        </div>
    );
};

export default TasksList;