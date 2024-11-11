import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";
function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });
  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div className="list-header">
      <h3 className="tittle is-3">My cars</h3>
      <div className="search field is-horizontal">
        <label className="label">search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        ></input>
      </div>
    </div>
  );
}

export default CarSearch;
