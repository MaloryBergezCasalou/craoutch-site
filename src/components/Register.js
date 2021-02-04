import React, { Component } from 'react';

class Register extends Component {
    render() {
        return <div className="container">
            <h1>Bien le bonjour</h1>
            <div className="register">
                <span>Création de votre compte</span>
                <form>
                    <input class="input" type="text" placeholder="Email" />
                    <input class="input" type="text" placeholder="Pseudo" />
                    <input class="input" type="password" placeholder="Password" />
                    <button className="registerButton" type="submit">Création</button>
                </form>
            </div>
        </div>
    }
}
export default Register