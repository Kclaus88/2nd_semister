import React from 'react';
import '../styles/index.scss'
function Index() {
    return (
        <div>
      <div className="container" id="index-bg">
        <div className="row">
            <div className='col s12 flex'>
              <div className="col s1">
              <button id='zero' className="btn-floating btn-large white left"><i className="material-icons purple-text text-darken-4">layers</i></button>
              </div>
              <div className="col offset-s3 s10"><h1 id="in-h-one">УЛААНБААТАР</h1></div>
            <div className="col offset-s3 s1">
            <button id='one' className="btn-floating btn-large white right"><i className="material-icons white-text">public</i></button>
            </div>
            </div>
        </div>
        <div className="row">
          <div className="col s12" id="content">
          </div>
        </div>
        <div className="row">
            <div className='col s12 flex'>
              <div className="col s2">
                <button id='zero' className="btn-floating btn-large white left"><i className="material-icons purple-text text-darken-4">message</i></button>
              </div>
              <div className="col offset-s3 s2">
                <button id='zero' className="btn-floating btn-large white left"><i className="material-icons purple-text text-darken-4">location_searching</i></button>
              </div>
              <div className="col offset-s3 s2">
                <button className="btn-floating btn-large white right"><i className="material-icons purple-text text-darken-4">account_circle</i></button>
              </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Index ;