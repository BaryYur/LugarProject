import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import StartingPage from './pages/StartingPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from  './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/starting" />  
        </Route>
        <Route path="/starting">
          <StartingPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/project">
          <ProjectPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="*">
            <NotFoundPage />
          </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
