import "./add-player-modal-details.less";
import { useForm } from "../../hooks/useForm";
import Immutable from "immutable";
const AddPlayerModalDetails = (props) => {
  const initialFormValue = {
    firstname: "",
    lastname: "",
    gender: "",
    level: ""
  };
  const [formValues, setFormValues] = useForm(initialFormValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(Immutable.fromJS(formValues));
    props.onClose && props.onClose(e); //close form
    //closeModal()
  };
  return (
    <form className="add-player-modal-details__form" onSubmit={handleSubmit}>
      <div>
        <label>
          Firstname:
          <input
            name="firstname"
            value={formValues.firstname}
            onChange={setFormValues}
          />
        </label>
      </div>
      <div>
        <label>
          Lastname:
          <input
            name="lastname"
            value={formValues.lastname}
            onChange={setFormValues}
          />
        </label>
      </div>
      <div>
        <label>
          Gender:
          <select
            name="gender"
            value={formValues.gender}
            onChange={setFormValues}
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Level:
          <select
            name="level"
            value={formValues.level}
            onChange={setFormValues}
          >
            <option value=""></option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </label>
      </div>
      <input type="submit" value="Add" />
    </form>
  );
};
export default AddPlayerModalDetails;
