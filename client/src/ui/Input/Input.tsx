import React from 'react';
import styles from './Input.module.scss';

interface IInput {
    name: string;
    value?: string;
    action?: () => void;
    inputStyles?: any;
    placeholder?: string;
}

const Input = ({ name, value, action, inputStyles, placeholder }:IInput) => {
    return (
        <input 
            className={styles['input']}
            type="text" 
            name={name}
            value={value}
            onChange={action}
            style={inputStyles ? inputStyles : {}}
        />
    );
};

export default Input;