import React from 'react';
import styles from './Button.module.scss';

const Button = (props: any) => {
    return (
        <button
            className={styles['button']}
            name={props.name}
            onClick={props.action}
        >
            {props.children}
        </button>
    );
}

export default Button;