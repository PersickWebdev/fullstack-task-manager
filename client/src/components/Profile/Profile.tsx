import React, { useState } from 'react';
import styles from './Profile.module.scss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { IUser } from '../../types/interfaces';
import { setUserAC, removeUserAC } from '../../redux/actionCreators/userActions';
import { useRequests } from '../../api';

interface IProfile {
    user: IUser
}

const Profile = ({ user }:IProfile) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userEditRequest, userDeleteRequest } = useRequests();
    const [ editMode, setEditMode ] = useState<boolean>(false);
    const [ formData, setFormData ] = useState<IUser>({
        userId: user.userId,
        token: user.token,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
        tasks: user.tasks
    });

    const collectInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData(() => {
            return {
                ...formData,
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
        try {
            const response = await userDeleteRequest({data: {userId}});
            if (response.status === 200) {
                localStorage.clear();
                dispatch(removeUserAC());
                alert(response.data.message);
                history.push('/');
            }
        } catch(error) {
            alert(error.response.data.message);
        }
    }

    const submitHandler = async (event: React.MouseEvent) => {
        event.preventDefault();
        const response = await userEditRequest(formData);
        if (response.status === 201) {
            localStorage.clear();
            dispatch(setUserAC(formData));
            localStorage.setItem('user', JSON.stringify(formData));
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