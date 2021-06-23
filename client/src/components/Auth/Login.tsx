import React, { useState } from 'react';
import styles from './Auth.module.scss';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ILoginFormData } from '../../types/interfaces';
import axios from 'axios';
import { setUserAC } from '../../redux/actionCreators/userActions';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [ formData, setFormData ] = useState<ILoginFormData>({});

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
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            if (response.status === 201) {
                dispatch(setUserAC(response.data));
                localStorage.setItem('user', JSON.stringify(response.data));
                history.push('/tasksListPage');
            }
        } catch(error) {
            alert(error.response.data.message);
        }
    }

    return (
        <div className={styles['auth']}>
            <h1 className={styles['auth__heading']}>
                Login
            </h1>
            <form className={styles['form']}>
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
                    <span>or</span>
                    <NavLink to="/register">
                        <button
                            className={styles['buttons__button']}
                            name="button-confirm"
                        >   
                            Sign Up
                        </button>
                    </NavLink>
                </div>
            </form>
        </div>
    );
}

export default Login;