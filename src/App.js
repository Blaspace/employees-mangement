import React from "react";
import { Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import RootRoute from "./component/RootRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardRoute from "./component/DashboardRoute";
import Video from "./pages/Video";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";
import ProtectedRout from "./component/ProtectedRout";
import PersistentLogin from "./component/PersistentLogin";
import LoginRoute from "./component/LoginRoute";
import RefuseLogin from "./component/RefuseLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRoute />}>
        <Route index element={<Root />} />
        <Route path="/*" element={<h1>404</h1>} />
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
            <Route path="/dashboard/video" element={<Video />} />
            <Route path="/dashboard/setting" element={<Setting />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
