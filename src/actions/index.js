export function selectedSong(song) {
  return {
    type: "SELECTED_SONG",
    payload: song
  };
}
