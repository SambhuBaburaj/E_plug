import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import LoggedInUser from "./ProtectedRoutes/LoggedInUser";
import LoggedOutUser from "./ProtectedRoutes/LoggedOutUser";
import { Navigate } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Admin/Home";
import Test from "./Pages/Admin/Test";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import AddedFood from "./Pages/Admin/Food/AddedFood";
import AcceptedList from "./Pages/Admin/Accepted-List/AcceptedList";
import CloseTime from "./Pages/Admin/CloseTime/CloseTime";

function App() {
  return (
    <Routes>
      <Route element={<LoggedOutUser />}>
        <Route element={<Home />} path="">
      <Route path="/" element={<Navigate replace to="/dashboard" />} />

          <Route element={<Test />} path="/home" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<AddedFood />} path="/added-food" />
          <Route element={<AcceptedList />} path="/accepted-list" />
          <Route element={<CloseTime />} path="/close-time" />
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
