import React from "react";
import { connect } from "react-redux";
import Song from "./Song";

class SongList extends React.Component {
  render() {
    return (
      <div>
        <h1>Charts</h1>
        <div>
        {this.props.songs.map(song => {
          return <Song song={song} key={song.title} />;
        })}
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
