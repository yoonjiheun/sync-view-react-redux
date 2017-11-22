import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


import { selectVideo } from '../actions/VideoAction';
import { setRecentVideos, setUpcomingVideos, loadRecentVideos, loadUpcomingVideos } from '../actions/VideoListAction';
import { openModal, closeModal } from '../actions/ModalAction';

import TheMovieDB from '../helpers/TheMovieDB';
import VideoRoomModal from '../components/VideoRoomModal';
import BrowseVideoBox from '../components/BrowseVideoBox';

class Browse extends Component {
  constructor(props) {
    super();
    console.log(props);
    props.loadRecentVideos();
    props.loadUpcomingVideos();
  }

  renderRecentMovies() {
    if(this.props.videoList.recentMovies.length > 0) {
       return this.props.videoList.recentMovies.map(obj => {
         return <BrowseVideoBox selectVideo={this.props.selectVideo} openModal={this.props.openModal} key={obj.id} id={obj.id} posterPath={obj.poster_path} title={obj.title} vidObj={obj}  />
       });
    }
  }

  renderUpcomingMovies(){
    if(this.props.videoList.upcomingMovies.length > 0) {
      return this.props.videoList.upcomingMovies.map(obj => {
         return <BrowseVideoBox selectVideo={this.props.selectVideo} openModal={this.props.openModal} key={obj.id} id={obj.id} posterPath={obj.poster_path} title={obj.title} vidObj={obj} />
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="columns is-multiline">
          {this.renderRecentMovies()}
        </div>
        <div className="columns is-multiline">
          {this.renderUpcomingMovies()}
        </div>
        <VideoRoomModal modalActivated={ this.props.modal.modalActivated } closeModal={this.props.closeModal}/>
     </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videoList: state.videoList,
    modal: state.modal,
    video: state.video
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setRecentVideos, setUpcomingVideos, loadRecentVideos,loadUpcomingVideos, closeModal, openModal, selectVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
