import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import {useSelector} from 'react-redux'
function App() {
  const userId=userSelector(state=>state.userReducer.id)
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
      <PrivateRoute exact path="/user/:id">
        <Dashboard />
      </PrivateRoute>
    </Router>
  );
}

export default App;
