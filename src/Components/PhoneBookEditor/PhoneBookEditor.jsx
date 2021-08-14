import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function PhoneBookEditor({ handleAddNewContact, handleChangeInput }) {
  const number = useSelector((state) => state.number);
  const name = useSelector((state) => state.name);
  // const dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={handleAddNewContact}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            style={{
              display: "block",
              marginBottom: "10px",
            }}
            onChange={handleChangeInput}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            style={{
              display: "block",
              marginBottom: "10px",
            }}
            onChange={handleChangeInput}
          />
        </label>

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

PhoneBookEditor.propTypes = {
  handleChangeInput: PropTypes.func.isRequired,
  handleAddNewContact: PropTypes.func.isRequired,
};

export default PhoneBookEditor;
