import { create } from 'zustand'
import { axiosInstance, endpoints } from '../axios';

const authStore = create((set) => ({
  loggedIn: null,
  loginFormData: {
    email: "",
    password: ""
  },
  signupFormData: {
    email: "",
    password: ""
  },
  // internal methods
  loginFormOnChange: (e) => {
    set((state) => {
      return {
        loginFormData: {
          ...state.loginFormData,
          [e.target.name]: e.target.value
        }
      }
    })
  },
  signupFormOnChange: (e) => {
    set((state) => {
      return {
        signupFormData: {
          ...state.signupFormData,
          [e.target.name]: e.target.value
        }
      }
    })
  },
  // api calls
  handleLoginSubmit: async (e) => {
    // console.log("__click clicl form context");
    const { loginFormData } = authStore.getState();

    await axiosInstance.post(endpoints.login, loginFormData, { withCredentials: true }).then((res) => {

      console.log(res);
      set({ loggedIn: true })
    }).catch((err) => {
      console.log(err);
    })
  },
  handleSignupSubmit: async () => {
    // console.log('something happend');
    const { signupFormData } = authStore.getState();

    await axiosInstance.post(endpoints.signup, signupFormData, { withCredentials: true }).then((res) => {

      console.log(res);
      set({
        loggedIn: true,
        signupFormData: {
          email: "",
          password: ""
        }
      })
    }).catch((err) => {
      console.log(err);
    })
  },
  logout: async () => {
    await axiosInstance.get(endpoints.logout, { withCredentials: true }).then((res) => {
      set({ loggedIn: false })
    }).catch((err) => {
      console.log(err);
    })
  },
  checkAuth: async () => {
    await axiosInstance.get(endpoints.check_auth, { withCredentials: true }).then((res) => {
      console.log("__check_auth__", res);
      set({ loggedIn: true })
    }).catch((err) => {
      set({ loggedIn: false })
      console.log("__check_auth__", err);
    })
  },


}))

export default authStore;