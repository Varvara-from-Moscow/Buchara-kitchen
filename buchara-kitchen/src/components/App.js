import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import './App.css';

function App() {
  return (
    <Switch>

    <div className="page">

      <Route path="/sign-in">
            <Register 
            />
      </Route>

      <Route exact path="/sign-up">
            <Login  
            />
      </Route>

      
    </div>

    </Switch>
  );
}

export default App;

/*
      <Route exact path="/sign-up">
            <Login  
            onLogin={handleLogin}/>
      </Route>


      onRegister={handleRegSubmit}
       */