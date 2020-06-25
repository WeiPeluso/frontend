import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import AddStudent from "./components/AddStudent";
import StudentPage from "./components/StudentPage";
import AddProject from "./components/AddProject";
import { useSelector } from "react-redux";
function App() {
  const [status, setStatus] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log(status);
    if (localStorage.getItem("token")) {
      setStatus(true);
    }
  }, [useSelector((state) => state.userReducer.refresh)]);
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(true);
    window.location.assign("/login");
    setStatus(false);
  };
  return (
    <Router>
      <div className="App">
        {status ? (
          <nav>
            <Link to="/">Home</Link>
            <Link onClick={logoutHandler}>Logout</Link>
            <Link to="/userdashboard">Dashboard</Link>
            <Link to="/register">Register Now</Link>
          </nav>
        ) : (
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/userdashboard">Dashboard</Link>
            <Link to="/register">Register Now</Link>
          </nav>
        )}
      </div>
      <Switch>
        <PrivateRoute exact path="/userdashboard" component={Dashboard} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
      <Route exact path="/user" component={Dashboard} />

      <Route exact path="/register" component={RegisterForm} />

      <Route exact path="/addstudent">
        <AddStudent />
      </Route>
      <Route exact path="/student/:id" component={StudentPage} />
      <Route exact path="/student/addproject/:id" component={AddProject} />
    </Router>
  );
}

export default App;
