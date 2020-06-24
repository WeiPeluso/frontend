import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentPage = () => {
  const { name } = useParams();
  const students = useSelector((state) => state.userReducer.students);
  console.log(name);

  const student = students.filter((student) => student.name === name);

  return (
    <>
      {student[0] && (
        <>
          <p>{student[0].name}</p>
          <p>{student[0].email}</p>
          <p>{student[0].subject}</p>
        </>
      )}

      {student[0] && student[0].projects && (
        <>
          <div className="projectSection">
            {student[0].projects.map((project) => {
              return (
                <div>
                  <p>{project.type}</p>
                  <p>{project.date}</p>
                  <p>{project.description}</p>
                </div>
              );
            })}
          </div>
        </>
      )}

      <button>Add a Project</button>
      <button>Edit</button>
      <button>Delete</button>
    </>
  );
};

export default StudentPage;
