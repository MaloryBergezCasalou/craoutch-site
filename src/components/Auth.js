import React, { Component } from 'react';

class Auth extends Component {
    render() {
        return <div className="container">
            <script src="https://craoutch-center.herokuapp.com/?/cookiechoices.js"></script>
            <script>document.addEventListener('DOMContentLoaded', function(event){cookieChoices.showCookieConsentBar(
            'Ce site utilise des cookies pour vous offrir le meilleur service. En poursuivant votre navigation, vous acceptez l’utilisation des cookies.', 
            'J’accepte', 'En savoir plus', 'https://www.cnil.fr/fr/comprendre-le-rgpd');});</script>
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