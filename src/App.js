import React, { Children } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage";
import Login from "./component/Login";
import Register from "./component/Register";
import SubmitProblem from "./component/SubmitProblem";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Detail from "./component/Detail";
import "./index.css";

const isAunthenticated = () => {
  return localStorage.getItem("authToken");
};

const ProtectedRoute = ({ children }) => {
  return isAunthenticated()  ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reportproblem"
          element={
            <ProtectedRoute>
              <SubmitProblem />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
