import { create } from "zustand";
import { MyQuery } from "../api/queries";
import { Root } from "../types";

export const useReposStore = create<{
  repos: Root;
  fetch: (search:string | number) => Promise<void>;
}>((set) => ({
  repos: {
    data: {
      search: {
        edges: [],
        avatarUrl: '',
        login: '',
      },
      viewer: {
        repositories: {
          nodes: [],
        },
        avatarUrl: '',
        login: '',
      },
    },
  },
  fetch: async (search)  => {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token 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`,
      },
      body: JSON.stringify({ query: MyQuery, variables: {searchText: search} }),
    });
    const data = await res.json();
    set({ repos: data });
  },
}));
