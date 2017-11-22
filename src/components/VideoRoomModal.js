import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import room from '../assets/images/room.png';
import solo from '../assets/images/solo.png';

class VideoRoomModal extends Component {
  render() {
    return (
      <div className={(this.props.modalActivated ? "is-active " : "") + "modal"}>
        <div className="modal-background"></div>
        <div className="modal-content modal-wrap">
          <div className="room-choice" onClick={() => this.props.history.push('/video')} >
            CREATE A ROOM
            <img src={room}/>
          </div>
          <div className="room-choice">
            PLAY SOLO ( ͡° ͜ʖ ͡°)
            <img src={solo}/>
          </div>
        </div>
        <button onClick={this.props.closeModal} className="modal-close is-large" aria-label="close"></button>
      </div>
    )
  }
}

export default withRouter(VideoRoomModal);
