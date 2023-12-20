import React from "react";
import { Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import RootRoute from "./component/RootRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardRoute from "./component/DashboardRoute";
import Profile from "./pages/Profile";
import ProtectedRout from "./component/ProtectedRout";
import PersistentLogin from "./component/PersistentLogin";
import LoginRoute from "./component/LoginRoute";
import RefuseLogin from "./component/RefuseLogin";
import Complain from "./pages/Complain";
import Assignment from "./pages/Assignment";
import Notification from "./pages/Notification";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRoute />}>
        <Route index element={<Root />} />
      </Route>
      <Route element={<RefuseLogin />}>
        <Route element={<LoginRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Route>
      <Route element={<PersistentLogin />}>
        <Route element={<ProtectedRout />}>
          <Route path="/" element={<DashboardRoute />}>
            <Route path="/dashboard" element={<Profile />} />
            <Route path="/dashboard/complains" element={<Complain />} />
            <Route path="/dashboard/assignment" element={<Assignment />} />
            <Route path="/dashboard/notification" element={<Notification />} />
          </Route>
        </Route>
      </Route>
      <Route
        path="/*"
        element={
          <center>
            <br />
            404
            <br /> page not found
          </center>
        }
      />
    </Routes>
  );
}

export default App;
