import React from 'react';
import styles from './Statistics.module.scss';
import { useSelector } from 'react-redux';
import { userReducer } from '../../redux/reducers/userReducer';
import { IUserReducer } from '../../types/interfaces';

interface IStatistics {
    userReducer: IUserReducer
}

const Statistics = () => {
    const { user } = useSelector(({ userReducer }:IStatistics) => userReducer);
    const tasks = user.tasks;
    const tasksCompleted = tasks.map((task) => task.isCompleted);
    const tasksLeft = (tasks.length + 1) - (tasksCompleted.length + 1);

    return (
        <div className={styles['statistics']}>
            <div className={styles['statistics__item']}>
                <span className={styles['statistics__item-name']}>
                    Total tasks:
                </span>
                <span className={styles['statistics__item-value']}>
                    {tasks.length + 1 || 0}
                </span>
            </div>
            <div className={styles['statistics__item']}>
                <span className={styles['statistics__item-name']}>
                    Completed tasks:
                </span>
                <span className={styles['statistics__item-value']}>
                    {tasksCompleted.length + 1 || 0}
                </span>
            </div>
            <div className={styles['statistics__item']}>
                <span className={styles['statistics__item-name']}>
                    Tasks left:
                </span>
                <span className={styles['statistics__item-value']}>
                    {tasksLeft || 0}
                </span>
            </div>
        </div>
    );
};

export default Statistics;