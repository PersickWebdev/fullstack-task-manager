import React, { useState } from 'react';
import styles from './Profile.module.scss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { IUser, IProfileFormData } from '../../types/interfaces';
import axios from 'axios';
import { setUserAC, removeUserAC } from '../../redux/actionCreators/userActions';

interface IProfile {
    user: IUser
}

const Profile = ({ user }:IProfile) => {
    console.log(user);
    
    const dispatch = useDispatch();
    const history = useHistory();
    const [ editMode, setEditMode ] = useState<boolean>(false);
    const [ formData, setFormData ] = useState<IProfileFormData>({});
    // const [ inputValue, setInputValue ] = useState<string>('');

    const collectInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // setInputValue(event.target.value);
        setFormData(() => {
            return {
                ...formData,
                email: user.email,
                [event.target.name]: event.target.value
            }
        });
    }

    const editProfileHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        setEditMode(true);
    }

    const deleteProfileHandler = async (event: React.MouseEvent, userId: string) => {
        event.preventDefault();
        console.log(userId);
        
        try {
            const response = await axios.delete('http://localhost:5000/api/user/user-delete', {
                data: {
                    userId
                }
            });
            if (response.status === 200) {
                alert(response.data.message);
                dispatch(removeUserAC());
                history.push('/');
            }
        } catch(error) {
            alert(error.response.data.message);
        }
        
    }

    const submitHandler = async (event: React.MouseEvent) => {
        event.preventDefault();
        const response = await axios.patch('http://localhost:5000/api/user/user-edit', formData);
        if (response.status === 201) {
            dispatch(setUserAC(formData));
            alert(response.data.message);
            setEditMode(false);
        }
    }

    const cancelHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        setEditMode(false);
    }
    
    return (
        <div className={styles['profile']}>
            <h1 className={styles['profile__heading']}>
                Profile
            </h1>
            <form
                className={styles['form']}
            >
                <div className={styles['form__input-feild']}>
                    <label 
                        className={styles['form__label']}
                        htmlFor="firstName"
                    >
                        First name:
                    </label>
                    {editMode
                        ?
                        <input
                            className={styles['form__input']}
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder={user.firstName}
                            value={formData.firstName}
                            onChange={collectInputValue}
                        />
                        :
                        <span className={styles['profile__value']}>{user.firstName}</span>
                    }
                </div>

                <div className={styles['form__input-feild']}>
                    <label 
                        className={styles['form__label']}
                        htmlFor="lastName"
                    >
                        Last name:
                    </label>
                    {editMode
                        ?
                        <input
                            className={styles['form__input']}
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder={user.lastName}
                            value={formData.lastName}
                            onChange={collectInputValue}
                        />
                        :
                        <span className={styles['profile__value']}>{user.lastName}</span>
                    }
                </div>

                <div className={styles['form__input-feild']}>
                    <label 
                        className={styles['form__label']}
                        htmlFor="age"
                    >
                        Age:
                    </label>
                    {editMode
                        ?
                        <input
                            className={styles['form__input']}
                            type="text"
                            id="age"
                            name="age"
                            placeholder={user.age}
                            value={formData.age}
                            onChange={collectInputValue}
                        />
                        :
                        <span className={styles['profile__value']}>{user.age}</span>
                    }
                </div>

                <div className={styles['form__input-feild']}>
                    <label 
                        className={styles['form__label']}
                        htmlFor="email"
                    >
                        Email:
                    </label>
                    <span className={styles['profile__value']}>{user.email}</span>
                </div>
                <div className={styles['buttons']}>
                    {editMode
                        ?
                            <>
                                <button
                                    className={styles['buttons__button']}
                                    onClick={submitHandler}
                                >
                                    Confirm
                                </button>
                                <button
                                    className={styles['buttons__button']}
                                    onClick={cancelHandler}
                                >
                                    Cancel
                                </button>
                            </>
                        :
                            <>
                                <button
                                    className={styles['buttons__button']}
                                    onClick={editProfileHandler}
                                >
                                    Edit Profile
                                </button>
                                <button
                                    className={`${styles['buttons__button']} ${styles['delete']}`}
                                    onClick={(event) => deleteProfileHandler(event, user.userId)}
                                >
                                    Delete Profile
                                </button>
                        </>
                    }
                </div>
            </form>
        </div>
    );
};

export default Profile;