import { create } from "zustand";
import { auth } from "./../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
  signUp: async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      set(() => ({ user }));
      console.log("signed up");

      return true;
    } catch (error) {
      console.log("sign up failed:", error);
      return false;
    }
  },
  signIn: async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      set(() => ({ user }));
      console.log("logged in");

      return true;
    } catch (error) {
      console.log("login failed:", error);
      return false;
    }
  },

  signOut: async () => {
    try {
      await signOut(auth);
      set(() => ({ user: null }));
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useAuthStore;
