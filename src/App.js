import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Auth from './components/Auth.js';
import Login from './components/Login.js';
import Register from './components/Register.js';

// Main Entry point function
function App() {
<<<<<<< HEAD
	return <Router>
    <CssBaseline />
      <Switch>
          <Route path="/" exact component={() => <div className="app">
            <SideBar />
            <Chat />
          </div>
          } />
          <Route path="/auth" exact component={() => <Auth />} />
          <Route path="/user" exact component={() => <Login />} />
		  <Route path="/user" exact component={() => <Register />} />
      </Switch>
    </Router>
=======
	return <Auth />
	return <Login />
	return <Register />
>>>>>>> 46e09014ef41c2a93eb838c1a83854ab88616e4f
}

// Rendering the entire react application
ReactDOM.render( < App /> , document.getElementById('root'));