import React from 'react';
import styles from './AddTaskForm.module.scss';
import { Input, Select, Button } from '../../ui';

const AddTaskForm = () => {
    return (
        <form className={styles['form']}>
            <div className={styles['form__input-box']}>
                <Input
                    name="addTask"
                    placeholder="Enter task description ..."
                />
            </div>
            <Select
                selectStyles={{
                    width: '20%'
                }}
            />
            <div className={styles['form__buttons']}>
                <Button
                    buttonStyles={{
                        width: '100%'
                    }}
                >
                    Add
                </Button>
            </div>
        </form>
    );
};

export default AddTaskForm;