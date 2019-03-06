import React from "react";
import { connect } from "react-redux";

class SongDetail extends React.Component {
  render() {
    if (!this.props.selectedSong) {
      return (
        <div>
          <h1>Select a Song</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>Details</h1>
        <h4>{this.props.selectedSong.title}</h4>
        <p>{this.props.selectedSong.artist}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
