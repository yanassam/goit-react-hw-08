import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => (
  <nav>
    <NavLink exact="true" to="/" className={buildLinkClass}>
      Home
    </NavLink>
    <NavLink to="/contacts" className={buildLinkClass}>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
