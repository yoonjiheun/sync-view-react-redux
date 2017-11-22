import React, { Component } from 'react';
import TheMovieDB from '../helpers/TheMovieDB';

class BrowseVideoBox extends Component {
  constructor(props) {
    super();
  }

  handleSelection(){
    this.setState({selected: true});
    this.props.selectVideo(this.props.id);
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
