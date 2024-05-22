import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthNav = () => (
  <div className={s.authNav}>
    <NavLink to="/register" className={buildLinkClass}>
      Register
    </NavLink>
    <NavLink to="/login" className={buildLinkClass}>
      Login
    </NavLink>
  </div>
);

export default AuthNav;
