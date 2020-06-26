import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StudentsList from "./StudentsList";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Reminder from "./Reminder";
import jwt_decode from "jwt-decode";

const Dashboard = (props) => {
  const token = localStorage.getItem("token");
  const tokenObject = jwt_decode(token);
  const userID = tokenObject.teacher_id;
  const refresh = useSelector((state) => state.userReducer.refresh);
  const [students, setStudents] = useState([]);
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
  }, [refresh, userID]);
  return (
    <>
      <h2> Welcome Professor {tokenObject.username}</h2>
      <DashboardContainer>
        <ReminderDiv className="reminder">
          <h2>Projects Due in a Week</h2>
          <Reminder students={students} />
        </ReminderDiv>

        <StudentsListDiv className="students">
          <ButtonLink to="/addstudent">Add a Student</ButtonLink>
          <StudentsList students={students} />
        </StudentsListDiv>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ReminderDiv = styled.div`
  background-color: lightgoldenrodyellow;
  border-radius: 5px;
  padding-left: 3%;
  padding-right: 3%;
  padding-bottom: 3%;
  width: 90%;
  margin-bottom: 2%;
  box-shadow: 0 0 3px black;
  h2 {
    font-size: 1.5rem;
    text-align: center;
  }
`;
const ButtonLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #0a2738;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  box-shadow: 1px 1px 2px black;
  &:hover {
    background-color: #a1a7aa;
    color: black;
  }
`;
const StudentsListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
