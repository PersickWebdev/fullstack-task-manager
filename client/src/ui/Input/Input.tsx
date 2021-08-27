import React, { useEffect, useState } from 'react';
import styles from './Input.module.scss';
import { IInput } from '../../types/interfaces';

const Input = ({ name, action, inputStyles, placeholder }:IInput) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        action && action(name, value);
    }, [value]);

    return (
        <input 
            className={styles['input']}
            type="text" 
            name={name}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder={placeholder}
            style={inputStyles ? inputStyles : {}}
        />
    );
};

export default Input;