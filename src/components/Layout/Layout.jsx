import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";
// import AppBar from "./components/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {/* <Outlet /> */}
      {/* {children} */}
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
