import React from 'react';
import styles from './TasksPage.module.scss';
import { AddTaskForm, TasksList } from '../../components';

const TasksPage = () => {
    return (
        <div className={styles['tasks-page']}>
            <AddTaskForm/>
            <TasksList/>
        </div>
    );
};

export default TasksPage;