import React from "react";
import { Link } from "react-router-dom";
import StudentCard from "./StudentCard";

const StudentList = (props) => {
  return (
    <>
      {props.students.map((student, index) => {
        return (
          <div key={index}>
            <Link
              to={`/student/${student.id}`}
              style={{ textDecoration: "none" }}
            >
              <StudentCard student={student} />
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default StudentList;
