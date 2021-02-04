import React, { Component } from 'react';

class Auth extends Component {
    render() {
        return <div className="container">
            <h1>ZABADAVADA</h1>
            <div className="register">
                <span>REGISTER</span>
                <form>
                    <input class="input" type="text" placeholder="Email" />
                    <input class="input" type="text" placeholder="Pseudo" />
                    <input class="input" type="password" placeholder="Password" />
                    <button className="registerButton" type="submit">CREATE ACCOUNT</button>
                </form>
            </div>
            <div className="login">
                <span>LOGIN</span>
                <form>
                    <input class="input" type="text" placeholder="Email" />
                    <input class="input" type="password" placeholder="Password" />
                    <button className="loginButton" type="submit" value="Login">CONNECT</button>
                </form>
            </div>
        </div>
    }
}
export default Auth