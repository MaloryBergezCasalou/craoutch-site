import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Auth from "./components/v1/Auth.js";
import Login from "./components/v1/Login.js";
import Register from "./components/v1/Register.js";
import AddFile from "./components/repo/AddFile.js";
import AuthR from "./components/repo/AuthR.js";
import CreateRepo from "./components/repo/CreateRepo.js";
import Main from "./components/repo/Main.js";
import UpdateRepo from "./components/repo/UpdateRepo.js";


// Main Entry point function
function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <div className="app">
              <SideBar />
              <Chat />
            </div>
          )}
        />
        <Route path="/auth" exact component={() => <Auth />} />
        <Route path="/login" exact component={() => <Login />} />
        <Route path="/register" exact component={() => <Register />} />
      </Switch>
    </Router>
  );
}

// Rendering the entire react application
ReactDOM.render(<App />, document.getElementById("root"));
