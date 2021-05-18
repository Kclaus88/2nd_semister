import React from 'react'
import '../styles/account.scss';

function Account() {
    return (
    <div>
        <h1>Account</h1>
        <div className="container">
        <div className="row" id="top">
            <div className="col s12" id="acc-one">
            <div className="col s1" id="acc-two">
            <button id='zero' className="btn-floating btn-large white icon"><i className="material-icons blue-text">settings</i></button>
            </div>
            <div className="col s1">
            <button className="btn-floating btn-large white"><i className="material-icons blue-text">arrow_downward</i></button>
            </div>
            </div>
        </div>
        <div className="row" id="user">
            <div className="col s8">
                <div className="row">
                    <h1 className="acc-h1">Munkhtulga</h1>
                </div>
                <div className="row">
                    <button id="acc-set-user" className="btn-large blue-text">Set Username<i className="material-icons blue-text left">edit</i></button>
                </div>
            </div>
            <div className="col offset-s1 s3">
                <div className="row">
                    <div id="profile-pic">
                        <h1 id="h1-one">M</h1>
                        <div className="btn-floating"><i className="material-icons">photo_camera</i></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row" id="highlight"></div>
        <div className="row" id="information"></div>
        </div>
    </div>
    )
}

export default Account ;