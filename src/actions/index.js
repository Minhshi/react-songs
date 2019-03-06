export function selectSong(song) {
  return {
    type: "SELECT_SONG",
    payload: song
  };
}
