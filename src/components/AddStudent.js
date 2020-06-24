import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { addStudent } from "../store/actions";

const AddStudent = () => {
  const userID = useSelector((state) => state.userReducer.id);
  const addStudentDispatch = useDispatch();
  const history = useHistory();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    subject: "",
    teacher_id: userID,
  });

  const studentInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(student);

    axiosWithAuth()
      .post(`/api/users/teacher/${userID}/students`, student)
      .then((res) => {
        addStudentDispatch(addStudent(student));
        history.push("/user");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h2>Add a Student</h2>
      <form onSubmit={onSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={studentInputChange}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={student.email}
          onChange={studentInputChange}
        />
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={student.subject}
          onChange={studentInputChange}
        />
        <button id="addButton" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddStudent;
