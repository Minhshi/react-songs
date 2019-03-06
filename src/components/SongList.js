import React from "react";
import { connect } from "react-redux";
import Song from "./Song";

class SongList extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <div className="ui items">
          <h1>Charts</h1>
          <div className="ui divided items">
            {this.props.songs.map(song => {
              return <Song song={song} key={song.title} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps)(SongList);
