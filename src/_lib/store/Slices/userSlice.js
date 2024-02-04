// redux/usersSlice.js

import { createSlice } from "@reduxjs/toolkit";
const users = [
  {
    id: 0,
    name: "string",
    profile_picture: "http://example.com",
    phone_number: "string",
    description: "string",
    birthdate: "2019-08-24",
    joining_date: "2019-08-24",
    active_status: true,
  },
  {
    id: 1,
    name: "string",
    profile_picture: "http://example.com",
    phone_number: "string",
    description: "string",
    birthdate: "2019-08-24",
    joining_date: "2019-08-24",
    active_status: true,
  },
  {
    id: 2,
    name: "string",
    profile_picture: "http://example.com",
    phone_number: "string",
    description: "string",
    birthdate: "2019-08-24",
    joining_date: "2019-08-24",
    active_status: true,
  },
  {
    id: 4,
    name: "string",
    profile_picture: "http://example.com",
    phone_number: "string",
    description: "string",
    birthdate: "2019-08-24",
    joining_date: "2019-08-24",
    active_status: true,
  },
  {
    id: 5,
    name: "string",
    profile_picture: "http://example.com",
    phone_number: "string",
    description: "string",
    birthdate: "2019-08-24",
    joining_date: "2019-08-24",
    active_status: true,
  },
  {
    id: 6,
    name: "string",
    profile_picture: "http://example.com",
    phone_number: "string",
    description: "string",
    birthdate: "2019-08-24",
    joining_date: "2019-08-24",
    active_status: true,
  },
  {
    id: 7,
    name: "string",
    profile_picture: "http://example.com",
    phone_number: "string",
    description: "string",
    birthdate: "2019-08-24",
    joining_date: "2019-08-24",
    active_status: true,
  },
  {
    id: 8,
    name: "string",
    profile_picture: "http://example.com",
    phone_number: "string",
    description: "string",
    birthdate: "2019-08-24",
    joining_date: "2019-08-24",
    active_status: true,
  },
  {
    id: 9,
    name: "string",
    profile_picture: "http://example.com",
    phone_number: "string",
    description: "string",
    birthdate: "2019-08-24",
    joining_date: "2019-08-24",
    active_status: true,
  },
  {
    id: 10,
    name: "string",
    profile_picture: "http://example.com",
    phone_number: "string",
    description: "string",
    birthdate: "2019-08-24",
    joining_date: "2019-08-24",
    active_status: true,
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userList: users,
  },
  reducers: {
    setUserList(state, action) {
      state.userList = action.payload;
    },
    removeUser(state, action) {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload
      );
    },
    updateUser(state, action) {
      const updatedUser = action.payload;
      const index = state.userList.findIndex(
        (user) => user.id === updatedUser.id
      );
      if (index !== -1) {
        state.userList[index] = updatedUser;
      }
    },
  },
});

export const { setUserList, addUser, removeUser, updateUser } =
  usersSlice.actions;

export default usersSlice.reducer;
