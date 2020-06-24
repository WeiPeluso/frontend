import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  console.log("I am here", token);
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://betterprofessoruni.herokuapp.com",
  });
};
