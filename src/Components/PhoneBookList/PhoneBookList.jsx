import PhoneBookListItem from "../PhoneBookListItem/PhoneBookListItem";
function PhoneBookList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <PhoneBookListItem key={id} name={name} number={number} id={id} />
        );
      })}
    </ul>
  );
}

export default PhoneBookList;
