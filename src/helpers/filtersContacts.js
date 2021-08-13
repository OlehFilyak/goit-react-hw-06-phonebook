import { useSelector } from "react-redux";

function FilterContacts(contacts) {
  const filterValue = useSelector((state) => state.filter);
  return contacts.filter((obj) => {
    return obj.name.toLowerCase().includes(filterValue.toLowerCase().trim());
  });
}

export default FilterContacts;
