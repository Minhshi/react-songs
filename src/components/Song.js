import React from "react";

class Song extends React.Component {
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
          <button className="ui button primary">Select</button>
        </div>
      </div>
    );
  }
}

export default Song;
