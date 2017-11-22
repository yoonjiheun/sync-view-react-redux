import React, { Component } from 'react';
import TheMovieDB from '../helpers/TheMovieDB';

class BrowseVideoBox extends Component {
  constructor(props) {
    super();
  }

  handleSelection(){
    this.props.selectVideo(this.props.vidObj);
    this.props.openModal();
  }

  render() {
    return (
      <div className="column is-one-quarter">
        <div className="content-wrap video-box">
          <h1>{this.props.title}</h1>
          <img src={TheMovieDB.getImages(this.props.posterPath)} onClick={this.handleSelection.bind(this)} />
        </div>
      </div>
    );
  }
}

export default BrowseVideoBox;
