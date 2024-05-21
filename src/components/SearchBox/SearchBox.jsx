import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={s.addContact}>
      <label htmlFor="findId">Find contacts by name</label>
      <input
        className={s.find}
        type="search"
        name="find"
        id="findId"
        placeholder="Enter name..."
        value={filter}
        onChange={(event) => {
          dispatch(changeFilter(event.target.value));
        }}
      />
    </div>
  );
};

export default SearchBox;
