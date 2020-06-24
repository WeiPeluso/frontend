import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StudentList = (props) => {
  return (
    <>
      {props.students.map((student, index) => {
        return (
          <div key={index}>
            <Link
              to={{
                pathname: `/student/${student.id}`,
                state: student,
              }}
              style={{ textDecoration: "none" }}
            >
              <p>{student.name}</p>
              <p>{student.email}</p>
              <p>{student.subject}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default StudentList;
