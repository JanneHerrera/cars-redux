import { changeName, changeCost, addCar } from "../store";
import { useSelector, useDispatch } from "react-redux";
function CarForm() {
  const name = useSelector((state) => state.form.name);
  const cost = useSelector((state) => state.form.cost);

  const dispatch = useDispatch();
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3"> Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            ></input>
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            ></input>
          </div>
        </div>
        <div className="field">
          <button className="button is-link"> submit </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
