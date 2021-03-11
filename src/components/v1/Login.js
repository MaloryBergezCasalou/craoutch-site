import React, { Component } from 'react';

class Login extends Component {
    render() {
        return <div className="container">
            <h1>Salut Salut</h1>
            <div className="login">
                <span>Je me connecte</span>
                <form>
                    <input class="input" type="text" placeholder="Email" />
                    <input class="input" type="password" placeholder="Password" />
                    <button className="loginButton" type="submit" value="Login">connection</button>
                </form>
            </div>
        </div>
    }
}
export default Login