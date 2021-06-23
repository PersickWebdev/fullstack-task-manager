import React from 'react';
import styles from './Select.module.scss';

interface ISelect {
    selectStyles?: any
}

const Select = ({ selectStyles }:ISelect) => {
    return (
        <div 
            className={styles['select']}
            style={selectStyles ? selectStyles : {}}
        >
            <label 
                className={styles['select__label']}
                htmlFor="prioritySelect"
            >
                <input 
                    className={styles['select__input']}
                    id="prioritySelect"
                    type="checkbox" 
                />
            </label>
            <ul className={styles['dropdown']}>
                <li className={styles['dropdown__item']}>high</li>
                <li className={styles['dropdown__item']}>medium</li>
                <li className={styles['dropdown__item']}>low</li>
            </ul>
        </div>
    );
};

export default Select;