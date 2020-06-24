import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const StudentCard = (props) => {
  const id = props.student.id;
  const userID = useSelector((state) => state.userReducer.id);
  const [projects, setProjects] = useState([]);
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/teacher/${userID}/students/projects`)
      .then((res) => {
        console.log(res.data);

        setProjects(
          res.data.filter((project) => {
            return project.student_id == id;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);
  return (
    <>
      <p>Name:&nbsp;{props.student.name}</p>
      <p>Email:&nbsp;{props.student.email}</p>
      <p>Subject:&nbsp;{props.student.subject}</p>
      <div className="projectSection">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <p>Project Name:&nbsp;{project.project_name}</p>
              <p>Due Date:&nbsp; {project.due_date}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StudentCard;
