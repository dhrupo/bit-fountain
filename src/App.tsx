import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login/Login';
import Navigation from './Navigation/Navigation';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Model from './Model/Model';
import DeviceModel from './DeviceModel/DeviceModel';

function App() {
  return (
    <Router>
    <Navigation></Navigation>
    <Switch>
      <Route path="/login">
        <Login></Login>
      </Route>
      <PrivateRoute exact path="/">
        <Model></Model>
      </PrivateRoute>
      <PrivateRoute path="/modeltype">
        <Model></Model>
      </PrivateRoute>
      <PrivateRoute path="/devicemodel">
        <DeviceModel></DeviceModel>
      </PrivateRoute>
    </Switch>
    </Router>
  );
}

export default App;