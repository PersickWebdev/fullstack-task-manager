import React from 'react';
import styles from './Notification.module.scss';
import { INotification } from '../../types/interfaces';

const Notification = ({ message }:INotification) => {
    return (
        <div className={styles['notification']}>
            <p className={styles['notification__text']}>
                {message}
            </p>
        </div>
    );
};

export default Notification;