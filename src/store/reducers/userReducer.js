import React from "react";
const initalUser = {
  username: "",
  id: 0,
  students: [],
};
const UserReducer = (state = initalUser, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default UserReducer;
