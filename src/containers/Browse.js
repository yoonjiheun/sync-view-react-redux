import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setRecentVideos, setUpcomingVideos } from '../actions/BrowseAction';
import TheMovieDB from '../helpers/TheMovieDB';

class Browse extends Component {
  constructor(props) {
    super();
    TheMovieDB.getRecentMovies().then((recentMovies) => {
      this.props.setRecentVideos(recentMovies);
    });

    TheMovieDB.getUpcomingMovies().then((upcomingMovies) => {
      this.props.setUpcomingVideos(upcomingMovies);
    });
  }

  render() {
    return (
      <div></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    browse: state.browse
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setRecentVideos, setUpcomingVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
