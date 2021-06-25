import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Statistics, Notification } from '../../components';
import {removeUserAC, setIsLogged} from '../../redux/actionCreators/userActions';
import { IUser } from '../../types/interfaces';

interface IHeader {
    isLogged: boolean;
    user: IUser;
}

const Header = ({ isLogged, user }:IHeader) => {
    const dispatch = useDispatch();
    
    const signOutHandler = async () => {
        dispatch(removeUserAC());
        dispatch(setIsLogged(false));
        localStorage.clear();
    }

    return (
        <header className={styles['header']}>
            <div className={styles['container']}>
                <div className={styles['header__content']}>
                    <h1 className={styles['header__heading-h1']}>Task Manager</h1>
                    <div className={styles['buttons']}>
                        {isLogged
                            ?
                            <>
                                <NavLink to="/profile">
                                    <button
                                        className={styles['buttons__button']}
                                    >       
                                        Profile
                                    </button>
                                </NavLink>
                                <button
                                    className={styles['buttons__button']}
                                    onClick={signOutHandler}
                                >
                                    Sign Out
                                </button>
                            </>
                            :
                            <>
                                <NavLink to="/">
                                    <button
                                        className={styles['buttons__button']}
                                    >       
                                        Sign In
                                    </button>
                                </NavLink>
                                <NavLink to="/register">
                                    <button
                                        className={styles['buttons__button']}
                                    >
                                        Sign Up
                                    </button>
                                </NavLink>
                            </>
                        }
                    </div>
                </div>
                {isLogged
                    ?
                    <Statistics
                        user={user}
                    />
                    :
                    <Notification
                        message="You need to be authorised to use the application"
                    />
                }
            </div>
        </header>
    )
}

export default Header;