import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Outlet } from "react-router-dom";

const HandlePersistentLogin = () => {
  const { handleLogout, setAuth, auth, uri } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const persistentlogin = () => {
      fetch(`${uri}/refresh`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else if (res.status === 401) {
            handleLogout();
          }
        })
        .then((data) => setAuth(data.accesstoken))
        .finally(() => setLoading(false));
    };
    !auth ? persistentlogin() : setLoading(false);
  }, []);
  return <>{!loading ? <Outlet /> : <h1>Loading...</h1>}</>;
};
export default HandlePersistentLogin;
