import React from 'react';
import styles from './Notification.module.scss';

const Notification = () => {
    return (
        <div className={styles['notification']}>
            <p className={styles['notification__text']}>
                You need to be authorised to use the application
            </p>
        </div>
    );
};

export default Notification;