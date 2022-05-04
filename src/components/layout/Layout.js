import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <div className={classes.main}>
        <main>{props.children}</main>
      </div>
    </>
  );
}

export default Layout;
