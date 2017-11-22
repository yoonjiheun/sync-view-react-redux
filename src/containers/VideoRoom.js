import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class VideoRoom extends Component {
  constructor(props) {
    super();
    console.log(props);
  }

  render() {
    return (
      <div>Hello world</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    video: state.video
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setRecentVideos, setUpcomingVideos, selectVideo, loadRecentVideos,loadUpcomingVideos, closeModal, openModal }, dispatch);
// }

export default connect(mapStateToProps)(VideoRoom);
