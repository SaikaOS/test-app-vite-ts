import { create } from "zustand";

type State = {
  inputText: string;
  setInputText: (inputText: string) => void;
};

export const useSearchStore = create<State>((set) => ({
  inputText: "",
  setInputText: (inputText) => set({ inputText }),
}));
