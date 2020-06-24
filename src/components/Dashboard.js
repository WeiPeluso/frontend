import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StudentsList from "./StudentsList";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useSelector } from "react-redux";

const Dashboard = (props) => {
  const students = useSelector((state) => state.userReducer.students);
  console.log(students);
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
