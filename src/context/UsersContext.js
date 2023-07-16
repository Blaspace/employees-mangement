import React, { createContext, useState } from "react";

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);

  return (
    <UsersContext.Provider value={{ user, users, setUser, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersContext;
