import { create } from "zustand";

interface SoundState {
  audio: HTMLAudioElement | null;
  isPlaying: boolean;
  setAudio: (src: string) => void;
  play: () => void;
  pause: () => void;
}

export const useSoundStore = create<SoundState>((set, get) => ({
  audio: null,
  isPlaying: false,

  setAudio: (src) => {
    const currentAudio = get().audio;
    if (currentAudio) {
      currentAudio.pause();
    }
    const newAudio = new Audio(src);
    newAudio.loop = true;
    newAudio.volume = 1;
    set({ audio: newAudio, isPlaying: false });
  },

  play: () => {
    const audio = get().audio;
    if (audio) {
      audio.play();
      set({ isPlaying: true });
    }
  },

  pause: () => {
    const audio = get().audio;
    if (audio) {
      audio.pause();
      set({ isPlaying: false });
    }
  },
}));
