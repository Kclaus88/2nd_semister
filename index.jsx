import React from 'react';
import logo from '/Users/munkhtulgaganbud/Desktop/nest.cpp/2nd-sem/lessons/3rd/3rd week/4.8 React/myfirstreact/src/pics/insta-black-icon.png'
import signature from '/Users/munkhtulgaganbud/Desktop/nest.cpp/2nd-sem/lessons/3rd/3rd week/4.8 React/myfirstreact/src/pics/1b47f9d0e595.png'
import home from '/Users/munkhtulgaganbud/Desktop/nest.cpp/2nd-sem/lessons/3rd/3rd week/4.8 React/myfirstreact/src/pics/home.png'
import messenger from '/Users/munkhtulgaganbud/Desktop/nest.cpp/2nd-sem/lessons/3rd/3rd week/4.8 React/myfirstreact/src/pics/messenger (1).png'
import safari from '/Users/munkhtulgaganbud/Desktop/nest.cpp/2nd-sem/lessons/3rd/3rd week/4.8 React/myfirstreact/src/pics/safari.png'
import hearth from '/Users/munkhtulgaganbud/Desktop/nest.cpp/2nd-sem/lessons/3rd/3rd week/4.8 React/myfirstreact/src/pics/heart1.svg'
import account from '/Users/munkhtulgaganbud/Desktop/nest.cpp/2nd-sem/lessons/3rd/3rd week/4.8 React/myfirstreact/src/pics/account.png'


function App() {
    return (
        <>
            <header>
                <div className="conatiner">
                <div className="card header">
                    <div className="container">
                    <div className="row">
                        <img id='logo' className="col" src={logo}/>
                        <img id='signature' className='col' src={signature} />
                        <input className="input-field col offset-s2 s2" type="text" id="search" placeholder="Search"/>
                        <img id='home' className="col offset-s2" src={home}/>
                        <img id='messenger' className="col" src={messenger}/>
                        <img id='safari' className="col" src={safari}/>
                        <img id='hearth' className="col" src={hearth}/>
                        <img id='account' className="col" src={account}/>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </>
    )
}

export default App;