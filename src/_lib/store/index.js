import { configureStore } from "@reduxjs/toolkit";
import userData from "./Slices/userSlice";
const makeStore = () => {
  return configureStore({
    reducer: {
      users: userData,
    },
  });
};

export default makeStore;
