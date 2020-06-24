import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import StudentsList from "./StudentsList";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useSelector } from "react-redux";

const Dashboard = (props) => {
  const userID = useSelector((state) => state.userReducer.id);
  const refresh = useSelector((state) => state.userReducer.refresh);
  const [students, setStudents] = useState([]);
  console.log(userID);
  console.log(refresh);
  useEffect(() => {
    if (userID !== 0) {
      axiosWithAuth()
        .get(`/api/users/teacher/${userID}/students`)
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [refresh]);
  return (
    <>
      <div className="reminder">
        This is the reminder section , comming up soon
      </div>

      <div className="students">
        <Link to="/addstudent">
          <button>Add a Student</button>
        </Link>
        <StudentsList students={students} />
      </div>
    </>
  );
};

export default Dashboard;
