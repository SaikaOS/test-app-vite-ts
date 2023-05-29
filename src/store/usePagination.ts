import { create } from "zustand";

type State = {
  currentPage: number;
  postsPerPage: number;
  setCurrentPage: (currentPage: number) => void;
  setPostsPerPage: (postsPerPage: number) => void;
};

export const usePaginationStore = create<State>((set) => ({
  currentPage: 1,
  postsPerPage: 10,
  setCurrentPage: (currentPage) => set({ currentPage }),
  setPostsPerPage: (postsPerPage) => set({ postsPerPage }),
}));
