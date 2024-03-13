import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import User from "./User";

function DynamicRounting() {
  const users = [
    { id: 1, name: "lipsa", email: "lipsa@gmail.com" },
    { id: 2, name: "nency", email: "nency@gmail.com" },
    { id: 3, name: "honey", email: "honey@gmail.com" },
    { id: 5, name: "heer", email: "heer@gmail.com" },
  ];
  return (
    <div>
      <Router>
        <h1>Dynamic Routing</h1>
        {users.map((item) => (
          <div>
            <Link to={"/user/" + item.id + "/" + item.name + "/" + item.email}>
              <h3>{item.name}</h3>
            </Link>
          </div>
        ))}
        <Routes>
          <Route path="/user/:id/:name/:email" element={<User />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default DynamicRounting;
