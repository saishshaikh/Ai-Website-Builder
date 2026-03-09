import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import useGetCurrentUser from "./Hooks/GetCurrentUser";


export const serverUrl = "http://localhost:8000";

const App = () => {
  useGetCurrentUser(); // custom hook to fetch logged-in user

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
