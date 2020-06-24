import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import AddStudent from "./components/AddStudent";
import StudentPage from "./components/StudentPage";
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/studentlist">Student List</Link>
          <Link to="/register">Register Now</Link>
        </nav>
      </div>

      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
      <PrivateRoute exact path="/user">
        <Dashboard />
      </PrivateRoute>
      <Route exact path="/addstudent">
        <AddStudent />
      </Route>
      <Route exact path="/student/:name">
        <StudentPage />
      </Route>
    </Router>
  );
}

export default App;
