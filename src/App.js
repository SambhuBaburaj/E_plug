import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import LoggedInUser from "./ProtectedRoutes/LoggedInUser";
import LoggedOutUser from "./ProtectedRoutes/LoggedOutUser";

import Register from "./Pages/Register";
import Home from "./Pages/Admin/Home";
import Test from "./Pages/Admin/Test";

function App() {
  return (
    <Routes>
      <Route element={<LoggedOutUser />}>

        
        <Route element={<Home />} path="/" >

        <Route element={<Test />} path="/home" />


        </Route>


      </Route>

      <Route element={<LoggedInUser />}>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Route>
    </Routes>
  );
}

export default App;
