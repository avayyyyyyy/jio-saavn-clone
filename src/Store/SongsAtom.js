import { atom } from "recoil";

export const trending = atom({
  key: "allSongs",
  default: [],
});

export let player = atom({
  key: "PlayerAtom",
  default: { name: "NOT", singer: "NOT", image: "NOT", albumImage: "Null" },
});

export const playerVisible = atom({
  key: "playerVisible",
  default: false,
});

export const currentPLaying = atom({
  key: "CurrentSOng",
  default: {
    url: "",
    isPlaying: false,
  },
});
