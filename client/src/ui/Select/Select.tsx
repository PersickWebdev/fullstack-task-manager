import React, { useState, useRef, SyntheticEvent } from 'react';
import styles from './Select.module.scss';
import { useHooks } from '../../hooks/hooks';

interface ISelect {
    selectStyles?: any;
}

const Select = ({ selectStyles }:ISelect) => {
    const { useClickOutside } = useHooks();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [ inputValue, setInputValue ] = useState<string>('Priority');
    const [ openDropdown, toggleOpenDropdown ] = useState<boolean>(false);

    const getValue = (event:SyntheticEvent<HTMLElement>) => {
        setInputValue(event.currentTarget.innerHTML);
        toggleOpenDropdown(false);
        event.preventDefault();
    };

    useClickOutside(dropdownRef, () => toggleOpenDropdown(false));

    return (
        <div 
            className={styles['select']}
            style={selectStyles ? selectStyles : {}}
            ref={dropdownRef}
            onClick={() => {
                toggleOpenDropdown(!openDropdown)
            }}
        >
            <label
                className={styles['select__label']}
                htmlFor="prioritySelect"
            >
                <input 
                    className={styles['select__input']}
                    id="prioritySelect"
                    type="text"
                    value={inputValue}
                    readOnly
                />
                {
                    openDropdown ? (
                        <ul className={styles['select__dropdown']}>
                            <li
                                className={styles['select__dropdown-item']}
                                onClick={getValue}
                            >
                                high
                            </li>
                            <li
                                className={styles['select__dropdown-item']}
                                onClick={getValue}
                            >
                                medium
                            </li>
                            <li
                                className={styles['select__dropdown-item']}
                                onClick={getValue}
                            >
                                low
                            </li>
                        </ul>
                    ) : ''
                }
            </label>
        </div>
    );
};

export default Select;