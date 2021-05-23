import React from 'react';
import '../styles/message.scss';

function Messages() {
    return(
        <div className="container" id="msg-con">
            <div className="row" id="msg-header">
                 <div className="col s5">
                        <h1>Messages</h1>
                 </div>
                 <div className="col offset-s4 s3" id="msg-button">
                        <a className="btn right"><i className="material-icons left">edit</i>New</a>
                 </div>
            </div>
            <div className="row" id="msg-input">
                <div className="col s12">
                  <div class="nav-wrapper">
                      <form>
                        <div class="input-field">
                          <input id="search" type="search" placeholder="search" required/>
                          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                          <i class="material-icons">close</i>
                            </div>
                          </form>
                     </div>
                   </div>
            </div>
            <div className="row" id="msg-chat">
                <div className="col s12">
                    <div className="row" id="msg-chat-contain">
                        <div className="col s12">
                            <div className="card-panel" id="msg-card">
                                <img id="msg-img" src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png" alt="lebron"/>
                                <div>
                                    <p>Lebron James<span>13:20</span></p>
                                    <span><i className="material-icons tiny">check</i><span>user : </span><span>Za yu bn andaa</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" id="msg-buttons"></div>
        </div>
    )
}

export default Messages;