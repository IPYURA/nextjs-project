'use client';

import { signOut } from "next-auth/react";
import classes from "./Logout.module.css";

const Logout = () => {
  const handleLogout = async () => {
    await signOut();
  };

  return <div  className={classes.text} onClick={handleLogout}>LOGOUT</div>;
};

export default Logout;
