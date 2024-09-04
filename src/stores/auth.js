import { create } from "zustand";

const useAuthStore = create(
  (set, get) => ({
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
  }
);

export default useAuthStore;