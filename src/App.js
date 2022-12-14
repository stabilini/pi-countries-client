import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import Detail from './components/Detail/Detail.jsx'
import CreateActivity from './components/CreateActivity/CreateActivity.jsx'
import Page404 from './components/Page404/Page404.jsx';
import About from './components/About/About.jsx';
import Users from './components/Users/Users.jsx';

import styles from './App.module.css';
import './App.css';

function App() {
  const theme = useSelector(state => state.theme);
  
  return (
    <div className={ `${styles.background} ${styles[theme]}` }>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/countries'>
          <Home />
        </Route>
        {/* <Route exact path='/loginregister'>
          <LoginRegister />
        </Route> */}
        <Route exact path='/users'>
          <Users />
        </Route>
        <Route exact path='/countries/:id'>
          <Detail />
        </Route>
        <Route exact path='/newactivity'>
          <CreateActivity />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route path="*">
          <Page404 />
        </Route >
      </Switch>
    </div>
  );
}

export default App;