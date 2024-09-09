import { create } from "zustand";
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist( (set, get) => ({
    auth: null,
    setAuth: (accessToken) => {
      const { user, exp, iat } = jwtDecode(accessToken);

      set({ auth: { accessToken, user, expireIn: exp - iat } });
    },
    getToken: () => {
      return get().auth?.accessToken;
    },
    setUser: (user) =>
      set((state) => ({
        auth: { ...state?.auth, user },
      })),
    clearAuth: () => set({ auth: null }),
  }),
  {
    name: "AuthData",
    getStorage: () => localStorage,
  }
  )
);

export default useAuthStore;