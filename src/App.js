import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
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
    </Router>
  );
}

export default App;
