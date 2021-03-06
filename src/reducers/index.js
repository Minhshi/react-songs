import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Gib Ihm",
      artist: "Shirin David"
    },
    {
      title: "DNA (feat. Summer Cem & Capital Bra)",
      artist: "KC Rebell"
    },
    {
      title: "je m'appelle",
      artist: "Capital Bra"
    },
    {
      title: "Fragen",
      artist: "Azet & Zuna"
    },
    {
      title: "Ferrari (feat. Mero)",
      artist: "Eno"
    },
    {
      title: "Prinzessa",
      artist: "Capital Bra"
    },
    {
      title: "Sweet But Psycho",
      artist: "Ava Max"
    },
    {
      title: "Shallow",
      artist: "Lady Gaga & Bradley Cooper"
    },
    {
      title: "Giant",
      artist: "Calvin Harris & Rag'n'Bone Man"
    },
    {
      title: "7 Rings",
      artist: "Ariana Grande"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
