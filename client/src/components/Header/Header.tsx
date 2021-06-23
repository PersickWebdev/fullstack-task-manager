import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Statistics, Notification } from '../../components';
import { removeUserAC } from '../../redux/actionCreators/userActions';

interface IHeader {
    isLogged: boolean
}

const Header = ({ isLogged }:IHeader) => {
    const dispatch = useDispatch();
    
    const signOutHandler = async () => {
        dispatch(removeUserAC());
    }

    return (
        <header className={styles['header']}>
            <div className={styles['container']}>
                <div className={styles['header__content']}>
                    <h1 className={styles['header__heading-h1']}>Tasks Manager</h1>
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
                    <Statistics/>
                    :
                    <Notification/>
                }
            </div>
        </header>
    )
}

export default Header;