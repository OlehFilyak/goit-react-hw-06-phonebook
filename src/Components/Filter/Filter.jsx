import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setFilter } from "../../redux/slices/filter";

function Filter() {
  const dispatch = useDispatch();

  const setFilterName = (e) => {
    dispatch(setFilter(e.target.value));
  };
  // console.log(setFilterName);
  const filterValue = useSelector((state) => state.filter);
  return (
    <label>
      Find Contact
      <input
        type="text"
        onChange={setFilterName}
        name="filter"
        value={filterValue}
        title="Введіть, будь ласка, ім'я, або прізвище людини, яку шукаєте"
        placeholder="Name"
      />
    </label>
  );
}

export default Filter;
