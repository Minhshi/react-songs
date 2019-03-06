import React from "react";

class Song extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.song.title}</h4>
        <p>{this.props.song.artist}</p>
      </div>
    );
  }
}

export default Song;
