import React from 'react';
import styles from './Input.module.scss';
import { IInput } from '../../types/interfaces';

const Input = ({ name, value, action, inputStyles, placeholder }:IInput) => {
    return (
        <input 
            className={styles['input']}
            type="text" 
            name={name}
            value={value}
            onChange={action}
            placeholder={placeholder}
            style={inputStyles ? inputStyles : {}}
        />
    );
};

export default Input;