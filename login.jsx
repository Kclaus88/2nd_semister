import React, { useState } from 'react';
import '../styles/login.scss'
import firebase from './firebase'
function Login(user) {
    const [input , setInput] = useState('')

    const signWithPhone = (event) => {
        event.preventDefault();
            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('l-button', {
            'size': 'invisible',
            'callback': (response) => {
              console.log(response)
              this.onSignInSubmit();
            }
          });
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(`+976${input}`, appVerifier)
            .then((confirmationResult) => {
            console.log(confirmationResult)
              window.confirmationResult = confirmationResult;
              const code = window.prompt();
                    confirmationResult.confirm(code).then((result) => {
                      const user = result.user;
                      console.log(user)
                    }).catch((error) => {
                    });
                }).catch((error) => {
                });
                    }
                    
    return (
        <div>
            <div className="container" id="l">
            <div className="row" id="l-row-one">
                <div className="col s12" id="l-row-one-content-one"><i className="material-icons large center icon-colors" id="iconone">account_circle</i></div>
            </div>
            <div className="row">
                <form onSubmit={(e)=> {e.preventDefault()}} className="col s12" id="l-form">
                    <div id="recaptcha-container"></div>
                    <div className="row">
                        <div className="input-field col s11">
                            <i className="material-icons Medium prefix icon-colors">phone</i>
                            <input value={input} onChange={(event) => setInput(event.target.value)} className="validate" placeholder="Phone Number" type="number"/>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col offset-s4 s6" id="l-button-container">
                    <button type="submit" onClick={signWithPhone} className="btn-large" id="l-button">Log In</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login;