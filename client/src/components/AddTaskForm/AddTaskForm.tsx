import React from 'react';
import { Input, Select, Button } from '../../ui';
import styles from './AddTaskForm.module.scss';

const AddTaskForm = () => {
    return (
        <form className={styles['form']}>
            <div className={styles['form__input-box']}>
                <Input
                    name="addTask"
                    placeholder="Enter task description ..."
                />
            </div>
            <Select/>
            <div className={styles['form__buttons']}>
                <Button>
                    Add
                </Button>
            </div>
        </form>
    );
};

export default AddTaskForm;