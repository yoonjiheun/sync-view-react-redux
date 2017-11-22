import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { setRecentVideos, setUpcomingVideos, selectVideo, loadRecentVideos, loadUpcomingVideos, closeModal } from '../actions/BrowseAction';

import TheMovieDB from '../helpers/TheMovieDB';
import VideoRoomModal from '../components/VideoRoomModal';
import BrowseVideoBox from '../components/BrowseVideoBox';

class Browse extends Component {
  constructor(props) {
    super();
    props.loadRecentVideos();
    props.loadUpcomingVideos();
  }

  renderRecentMovies() {
    if(this.props.browse.recentMovies.length > 0) {
       return this.props.browse.recentMovies.map(obj => {
         return <BrowseVideoBox selectVideo={this.props.selectVideo} key={obj.id} id={obj.id} posterPath={obj.poster_path} title={obj.title} />
       });
    }
  }

  renderUpcomingMovies(){
    if(this.props.browse.upcomingMovies.length > 0) {
      return this.props.browse.upcomingMovies.map(obj => {
         return <BrowseVideoBox selectVideo={this.props.selectVideo} key={obj.id} id={obj.id} posterPath={obj.poster_path} title={obj.title} />
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
        <VideoRoomModal modalActivated={ this.props.browse.modalActivated } closeModal={this.props.closeModal}/>
     </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    browse: state.browse
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setRecentVideos, setUpcomingVideos, selectVideo, loadRecentVideos,loadUpcomingVideos, closeModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
