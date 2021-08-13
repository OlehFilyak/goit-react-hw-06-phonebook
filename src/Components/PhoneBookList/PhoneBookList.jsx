import PhoneBookListItem from "../PhoneBookListItem/PhoneBookListItem";
function PhoneBookList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <PhoneBookListItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
}

export default PhoneBookList;
