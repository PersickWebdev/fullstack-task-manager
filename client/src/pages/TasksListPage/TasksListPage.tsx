import React from 'react';
import styles from './TasksListPage.module.scss';
import { TasksList } from '../../components';

const TasksListPage = () => {
    return (
        <div className={styles['tasks-list-page']}>
            <div className={styles['container']}>
                 <TasksList/>
            </div>
        </div>
    );
};

export default TasksListPage;