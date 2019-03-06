import React from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

class Song extends React.Component {
  onSongSelect = () => {
    this.props.selectedSong(this.props.song);
  };

  render() {
    return (
      <div className="item">
        <div className="content">
          <div>
            <h4>{this.props.song.title}</h4>
          </div>
          <div>
            <p>{this.props.song.artist}</p>
          </div>
        </div>
        <div className="right floated button">
          <button className="ui button primary" onClick={this.onSongSelect}>
            Select
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { selectedSong }
)(Song);
