import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/home.scss'
function Home() {
    const history = useHistory();
    const toLogin = () => history.push('/login')
    return (
        <div>
            <div className="container" id="hm-con">
                <div className="row">
                    <div className="col s12" id="hm-col">
                        <p id="hm-p">welcome to</p>
                        <h1 id="hm-header">Leaply</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12" id="hm-icons">
                        <div ><i className="material-icons large white-text" id="hm-icons-a">account_circle</i></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12" id="hm-btn">
                        <button id="hm-btn-button" onClick={toLogin}>join us !</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home ;