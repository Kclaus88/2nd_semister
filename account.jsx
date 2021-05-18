import React from 'react'
import '../styles/account.scss';

function Account() {
    return (
    <div>
        <h1>Account</h1>

        {/* Section-1 header */}
    <div className="container">
        <header>
        <div className="row" id="acc-top">
            <div className="col s12" id="acc-one">
            <div className="col s1" id="acc-two">
            <button id="acc-top-icon"  className="btn-floating btn-large white"><i className="material-icons blue-text">settings</i></button>
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
        </header>
        
        {/* Section-2 Body */}
        <body>
            <div className="row" id="highlight">
                <h1 id="bd-header1">HIGHLIGHTS</h1>
                <div className="row" id="bg-row-one">
                <div className="col s5">
                    <h2 id="bg-row-one-header2">NO POPS YET</h2>
                    <h3 className="bg-row-one-header3">0</h3>
                </div>
                <div className="col offset-s1 s5">
                    <h2 id="bg-row-one-header2">VIEWS</h2>
                    <h3 id="bg-row-one-header3">3</h3>
                    <p id="bg-row-one-p1">MORE FREINDS TO UNLOCK</p>
                </div>
                </div>
                <div className="row" id="bg-row-two">
                    <div className="col s11">
                        <h2 id="bg-row-one-header2">CHANGE YOUR APP ICON</h2>
                        <div className="row" id="bg-row-two-1">
                        <div id="bg-row-two-box-1" className="col s2">
                            <div id="bg-row-two-box-1-icon"><i className="material-icons">check</i></div>
                        </div>
                        <div id="bg-row-two-box" className="col offset-s1 s2"></div>
                        <div id="bg-row-two-box" className="col offset-s1 s2"></div>
                        <div id="bg-row-two-box" className="col offset-s1 s2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </body>

        {/* Footer */}
        <footer>
        <div className="row" id="information"></div>
        </footer>
    </div>
    </div>
    )
}

export default Account ;
