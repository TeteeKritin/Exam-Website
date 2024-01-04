"use client"
import React from "react";
import { useState } from "react";
import users from "../data/users";

const Login = () => {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const attemptLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.id.toString() === studentID);

    if (user) {
      if (user.password === password) {
        window.location.href = `/login/success/${user.id}`;
      } else {
        setErrorMessage('Wrong Password');
      }
    } else {
      setErrorMessage('The studentID does not exist');
    }
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-[100vh]">
      <div className="border w-fit border-black rounded-2xl text-center p-7 flex justify-between">
        <form onSubmit={attemptLogin}>
          <h1 className="font-extrabold text-3xl">Login</h1>
          <div className="m-4">
            <input
              type="text"
              placeholder="Student ID"
              required
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
            />
          </div>
          <div className="m-4">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="border-2 rounded-3xl bg-black text-white px-7">
            Login
          </button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
