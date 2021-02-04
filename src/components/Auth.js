import React, { Component } from 'react';

class Auth extends Component {
    render() {
        return <div className="container">
            <h1>Bienvenue !</h1>
            <div className="register">
                <span>Création</span>
                <form>
                    <button className="window.location.href='Register.js'">Je me créé un compte</button>
                </form>
            </div>
            <div className="login">
                <span>Connection</span>
                <form>
                    <button className="window.location.href='Login.js'">Je me connecte à mon compte</button>
                </form>
            </div>
        </div>
    }
}
export default Auth