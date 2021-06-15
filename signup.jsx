import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import { firestore } from './firebase'
import '../styles/login.scss'
function SignUp({user}) {
    const history = useHistory()
    const toAccount = () => history.push('/account')
    const [info , setInfo] = useState({})



    
    return (
        <div>
            <div className="container" id="l">
            <div className="row" id="l-row-one">
                <div className="col s12" id="l-row-one-content-one"><i className="material-icons large center icon-colors" id="iconone">account_circle</i></div>
            </div>
            <div className="row">
                <form onSubmit={(e)=> {e.preventDefault()}} className="col s12" id="l-form">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons Medium prefix icon-colors">assignment_ind</i>
                            <input className="validate" placeholder="User Name" type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons Medium prefix icon-colors">date_range</i>
                            <input className="validate" placeholder="Birthday" type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons Medium prefix icon-colors">email</i>
                            <input className="validate" placeholder="E-mail" type="text"/>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col offset-s5 s6" id="l-button-container">
                    <button className="btn-large" id="l-button" onClick={toAccount}>Sign Up</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SignUp;