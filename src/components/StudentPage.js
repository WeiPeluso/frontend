import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentPage = (props) => {
  const { id } = useParams();
  console.log(id);
  const student = props.location.state;
  console.log(student);

  return (
    <>
      {student && (
        <>
          <p>{student.name}</p>
          <p>{student.email}</p>
          <p>{student.subject}</p>
        </>
      )}

      {student && student.projects && (
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
