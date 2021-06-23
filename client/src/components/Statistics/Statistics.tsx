import React from 'react';
import styles from './Statistics.module.scss';
import { IUser } from '../../types/interfaces';

interface IStatistics {
    user: IUser;
}

const Statistics = ({ user }:IStatistics) => {
    const tasks = user.tasks;
    const tasksCompleted = tasks.map((task) => task.isCompleted);
    const tasksLeft = (tasks.length) - (tasksCompleted.length);

    return (
        <div className={styles['statistics']}>
            <div className={styles['statistics__item']}>
                <span className={styles['statistics__item-name']}>
                    Total tasks:
                </span>
                <span className={styles['statistics__item-value']}>
                    {tasks.length || 0}
                </span>
            </div>
            <div className={styles['statistics__item']}>
                <span className={styles['statistics__item-name']}>
                    Completed tasks:
                </span>
                <span className={styles['statistics__item-value']}>
                    {tasksCompleted.length || 0}
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