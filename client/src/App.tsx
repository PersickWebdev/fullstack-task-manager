import React from 'react';
import styles from './App.module.scss';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TasksListPage } from './pages';
import { Header, Register, Login, Profile, Footer } from './components';
import { IUserReducer } from './types/interfaces';

interface IApp {
  userReducer: IUserReducer
}

const App = () => {
  const { isLogged, user } = useSelector(({ userReducer }: IApp) => userReducer);
  
  return (
    <div className={styles['application']}>
      <Header
        isLogged={isLogged}
      />
      <main className={styles['main']}>
        <div className={styles['container']}>
          {isLogged
            ?
              <>
                <Switch>
                  <Route path="/tasksListPage">
                    <TasksListPage/>
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