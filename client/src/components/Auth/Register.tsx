import React, { useState } from 'react';
import styles from './Auth.module.scss';
import { useHistory } from 'react-router';
import { IRegisterFormData } from '../../types/interfaces';
import axios from 'axios';

const Register = () => {
    const history = useHistory();
    const [ formData, setFormData ] = useState<IRegisterFormData>({});

    const collectInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData(() => {
            return {
                ...formData,
                [event.target.name]: event.target.value
            }
        });
    }

    const submitHandler = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            if (response.status === 201) {
                alert(response.data.message);

                history.push('/');
            }
        } catch(error) {
            alert(error.response.data.message);
        } 
    }

    const cancelHandler = () => {
        history.push('/');
    }

    return (
        <div className={styles['auth']}>
            <h1 className={styles['auth__heading']}>
                Register
            </h1>
            <form className={styles['form']}>
                <div className={styles['form__input-field']}>
                    <label 
                        className={styles['form__label']}
                        htmlFor="firstName"
                    >
                        First name:
                    </label>
                    <input 
                        className={styles['form__input']}
                        id="firstName" 
                        type="text" 
                        name="firstName"
                        onChange={collectInputValue}
                    />
                    <span className={styles['form__input-warning']}></span>
                </div>
                <div className={styles['form__input-field']}>
                    <label 
                        className={styles['form__label']}
                        htmlFor="lastName"
                    >
                        Last name:
                    </label>
                    <input 
                        className={styles['form__input']}
                        id="lastName" 
                        type="text" 
                        name="lastName"
                        onChange={collectInputValue}
                    />
                    <span className={styles['form__input-warning']}></span>
                </div>
                <div className={styles['form__input-field']}>
                    <label
                        className={styles['form__label']} 
                        htmlFor="age"
                    >
                        Age:
                    </label>
                    <input 
                        className={styles['form__input']}
                        id="age" 
                        type="text" 
                        name="age"
                        onChange={collectInputValue}
                    />
                    <span className={styles['form__input-warning']}></span>
                </div>
                <div className={styles['form__input-field']}>
                    <label
                        className={styles['form__label']} 
                        htmlFor="email"
                    >
                        Email:
                    </label>
                    <input 
                        className={styles['form__input']}
                        id="email" 
                        type="text" 
                        name="email"
                        onChange={collectInputValue}
                    />
                    <span className={styles['form__input-warning']}></span>
                </div>
                <div className={styles['form__input-field']}>
                    <label 
                        className={styles['form__label']}
                        htmlFor="password"
                    >
                        Password:
                    </label>
                    <input 
                        className={styles['form__input']}
                        id="password" 
                        type="text" 
                        name="password"
                        onChange={collectInputValue}
                    />
                    <span className={styles['form__input-warning']}></span>
                </div>
                <div className={styles['buttons']}>
                    <button
                        className={styles['buttons__button']}
                        name="button-confirm"
                        onClick={submitHandler}
                    >
                        Confirm
                    </button>
                    <button
                        className={styles['buttons__button']}
                        name="button-cancel"
                        onClick={cancelHandler}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;