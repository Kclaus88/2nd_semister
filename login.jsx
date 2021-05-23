import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/login.scss'

function Login() {
    const history = useHistory();
    const toSignUp = () => history.push('/signup');
    return (
        <div>
            <div className="container" id="l">
            <div className="row" id="l-row-one">
                <div className="col s12" id="l-row-one-content-one"><i className="material-icons large center icon-colors" id="iconone">account_circle</i></div>
            </div>
            <div className="row">
                <form className="col s12" id="l-form">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons Medium prefix icon-colors">assignment_ind</i>
                            <input className="validate" placeholder="User Name" type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s11">
                            <i className="material-icons Medium prefix icon-colors">remove_red_eye</i>
                            <input className="validate" placeholder="Password" type="password"/>
                            <i className="material-icons Medium prefix icon-colors">sync</i>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col offset-s4 s6" id="l-button-container">
                    <button className="btn-large" id="l-button" onClick={toSignUp}>Log In</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login;