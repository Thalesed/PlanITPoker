import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create((set) => {
  const loadAuthFromLocalStorage = () => {
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      return JSON.parse(savedAuth);
    }
    return null;
  };

  const saveAuthToLocalStorage = (auth) => {
    localStorage.setItem('auth', JSON.stringify(auth));
  };

  return {
    auth: loadAuthFromLocalStorage(),
    setAuth: (accessToken) => {
      const { user, iat: issuedAtTimestamp, exp: expireAtTimestamp } = jwtDecode(accessToken);
      
      const secureTime = 5 * 60;
      const expireIn = expireAtTimestamp - issuedAtTimestamp - secureTime;

      const newAuth = {
        accessToken,
        user,
        expireIn,
      };

      saveAuthToLocalStorage(newAuth);

      set({ auth: newAuth });
    },
    
    setUser: (user) => set((state) => {
      const newAuth = { ...state.auth, user };
      saveAuthToLocalStorage(newAuth);
      return { auth: newAuth };
    }),

    clearAuth: () => {
      localStorage.removeItem('auth');
      set({ auth: null });
    },
  };
});

export default useAuthStore;
