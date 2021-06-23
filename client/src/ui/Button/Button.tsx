import React from 'react';
import styles from './Button.module.scss';
import { IButton } from '../../types/interfaces';

const Button = ({ children, action, buttonStyles }:IButton) => {
    return (
        <button
            className={styles['button']}
            onClick={action}
            style={buttonStyles ? buttonStyles : {}}
        >
            {children}
        </button>
    );
}

export default Button;