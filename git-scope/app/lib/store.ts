import { create } from "zustand";
import { GithubUser, GithubRepo } from "../types/github";

export interface State {
  theme: string;
  setTheme: (u: string) => void;

  userInfo: GithubUser | null;
  setUserInfo: (u: GithubUser | null) => void;

  repos: GithubRepo[];
  setRepos: (r: GithubRepo[]) => void;

  username: string;
  setUsername: (e: string) => void;

  page: number;
  perPage: number;
  totalCount?: number;
  setPage: (p: number) => void;
  setPerPage: (n: number) => void;

  loading: boolean;
  setLoading: (v: boolean) => void;

  error?: string | null;
  setError: (e?: string | null) => void;
}

export const useStore = create<State>()((set) => ({
  theme: "",
  setTheme: (u) => set({ theme: u }),

  username: "",
  setUsername: (u) => set({ username: u }),

  userInfo: null,
  setUserInfo: (u) => set({ userInfo: u }),

  repos: [],
  setRepos: (r) => set({ repos: r }),

  page: 1,
  perPage: 3,
  totalCount: undefined,

  setPage: (p) => set({ page: p }),
  setPerPage: (n) => set({ perPage: n }),

  loading: false,
  setLoading: (v) => set({ loading: v }),

  error: null,
  setError: (e) => set({ error: e }),
}));