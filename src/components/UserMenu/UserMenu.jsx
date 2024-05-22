import { useDispatch, useSelector } from "react-redux";
import { selectUserEmail } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <div className={s.userMenu}>
      <span className={s.email}>Welcome, {email}!</span>
      <button className={s.button} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
