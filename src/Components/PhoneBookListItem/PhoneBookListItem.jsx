import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/slices/contacts";

function PhoneBookListItem({ id, name, number }) {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li key={id}>
      <div>
        <p className="ContactName">Name: {name}</p>
        <p>Number: {number}</p>
      </div>
      <button onClick={deleteItem} id={id}>
        Delete
      </button>
    </li>
  );
}

PhoneBookListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default PhoneBookListItem;
