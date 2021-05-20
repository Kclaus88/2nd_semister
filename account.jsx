import React from 'react'
import '../styles/account.scss';

function Account() {
    return (
    <div>

        {/* Section-1 header */}
    <div className="container">
        <header>
        <div className="row" id="acc-top">
            <div className="col s12" id="acc-one">
            <div className="col s1" id="acc-two">
            <button id="acc-top-icon-one"  className="btn-floating btn-large white"><i className="material-icons blue-text">settings</i></button>
            </div>
            <div className="col s1">
            <button id="acc-top-icon-two" className="btn-floating btn-large white"><i className="material-icons blue-text">arrow_downward</i></button>
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
        <div className="row" id="information">
        <div className="row">
            <div className="col s12" id="ft-r">
            <svg aria-label="Activity Feed" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
            </div>
        </div>
        <div className="row">
            <div className="col s12" id="ft-text">
                <p id="ft-text-p">In a stroke of genius, you joined Zenly on a bright morning in May 2021. Its been 1 day since then and our love for you has never faltered</p>
            </div>
        </div>
        </div>
        </footer>

        {/* Buttons */}
        <div className="row" id="btm-fixed-buttons">
            <div className="col offset-s3 s1">
               <button id='acc-btn-one' className="btn-floating btn-large white left"><i className="material-icons purple-text text-darken-4">message</i></button>
            </div>
            <div className="col offset-s1 s1">
               <button id='acc-btn-two' className="btn-floating btn-large white left"><i className="material-icons purple-text text-darken-4">public</i></button>
            </div>
            <div className="col offset-s1 s1">
                <button id="acc-btn-three" className="btn-floating btn-large white left"><i className="material-icons purple-text text-darken-4">account_circle</i></button>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Account ;