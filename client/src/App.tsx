import React from 'react';
import styles from './App.module.scss';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Register, Login, Profile, TasksList, Footer } from './components';
import { IUserReducer } from './types/interfaces';
import { setIsLogged, setUserAC } from './redux/actionCreators/userActions';

interface IApp {
    userReducer: IUserReducer
}

const App = () => {
    const dispatch = useDispatch();

    const currentUser = localStorage.getItem('user');
    if (currentUser) {
        dispatch(setUserAC(JSON.parse(currentUser)));
        dispatch(setIsLogged(true));
    }

    const { isLogged, user } = useSelector(({ userReducer }: IApp) => userReducer);

    console.log('App - User: ', user);

    return (
        <div className={styles['application']}>
            <Header
                isLogged={isLogged}
                user={user}
            />
            <main className={styles['main']}>
                <div className={styles['container']}>
                    {isLogged
                        ?
                        <>
                            <Switch>
                                <Route path="/tasksPage">
                                    <TasksList/>
                                </Route>
                                <Route path="/profile">
                                    <Profile
                                        user={user}
                                    />
                                </Route>
                            </Switch>
                        </>
                        :
                        <>
                            <Switch>
                                <Route path="/register">
                                    <Register/>
                                </Route>
                                <Route path="/">
                                    <Login/>
                                </Route>
                            </Switch>
                        </>
                    }
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;