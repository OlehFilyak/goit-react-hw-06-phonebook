import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Container from "./Components/Container/";
import Section from "./Components/Section";
import PhoneBookList from "./Components/PhoneBookList";
import PhoneBookEditor from "./Components/PhoneBookEditor";
import Filter from "./Components/Filter";
import filterContacts from "./helpers/filtersContacts";
import InitialContacts from "./data/InitialContacts.json";

import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem("contacts")) ?? InitialContacts
  );
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      case "filter":
        setFilter(value);
        break;

      default:
        return;
    }
  };

  const handleAddNewContact = (e) => {
    e.preventDefault();

    if (contacts.some((el) => el.name === name)) {
      alert(`${name} has alredy be declared`);
      return;
    }

    let newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    setContacts((prevState) => [...prevState, newContact]);
    setName("");
    setNumber("");
  };

  const onDeleteContact = (e) => {
    setContacts(() => contacts.filter((el) => el.id !== e.target.id));
  };

  const contactsArray = filterContacts(contacts, filter);
  return (
    <div className="App">
      <Container>
        <Section title={"Phonebook"}>
          <Section title={"Add new contact"}>
            <PhoneBookEditor
              name={name}
              number={number}
              handleAddNewContact={handleAddNewContact}
              handleChangeInput={handleChangeInput}
            />
          </Section>
          <Section title={"Contacts"}>
            <Filter onChange={handleChangeInput} filterValue={filter} />
            <PhoneBookList
              contacts={contactsArray}
              onDeleteContact={onDeleteContact}
            />
          </Section>
        </Section>
      </Container>
    </div>
  );
}

// THE CODE IS WRITTEN IN CLASSES
// import { Component } from "react";
// import { nanoid } from "nanoid";

// import Container from "./Components/Container/";
// import Section from "./Components/Section";
// import PhoneBookList from "./Components/PhoneBookList";
// import PhoneBookEditor from "./Components/PhoneBookEditor";
// import Filter from "./Components/Filter";
// import filterContacts from "./helpers/filtersContacts";
// import InitialContacts from "./data/InitialContacts.json";

// import "./App.css";

// class App extends Component {
//   state = {
//     contacts: InitialContacts,
//     name: "",
//     number: "",
//     filter: "",
//   };

//   componentDidMount() {
//     // console.log("componentDidMount");
//     const contactsFromLocalStorage = localStorage.getItem("contacts");
//     // console.log(contactsFromLocalStorage);
//     const parsedContactsFromLocalStorage = JSON.parse(contactsFromLocalStorage);
//     console.log(parsedContactsFromLocalStorage);
//     if (parsedContactsFromLocalStorage) {
//       this.setState({ contacts: parsedContactsFromLocalStorage });
//     }
//     // const contacts =
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log("componentDidUpdate");
//     if (this.state.contacts !== prevState.contacts) {
//       console.log("Обновилося поле contacts");
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   handleChangeInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleAddNewContact = (e) => {
//     e.preventDefault();

//     const { contacts, name, number } = this.state;
//     if (contacts.some((el) => el.name === name)) {
//       alert(`${name} has alredy be declared`);
//       return;
//     }

//     let contact = {
//       name: name,
//       number: number,
//       id: nanoid(),
//     };

//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, contact],
//       name: "",
//       number: "",
//     }));
//   };

//   onDeleteContact = (e) => {
//     const { contacts } = this.state;
//     this.setState({
//       contacts: contacts.filter((el) => el.id !== e.target.id),
//     });
//   };

//   handleChangeFilter = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   render() {
//     const contacts = filterContacts(this.state.contacts, this.state.filter);
//     const { name, number, filter } = this.state;
//     return (
//       <div className="App">
//         <Container>
//           <Section title={"Phonebook"}>
//             <Section title={"Add new contact"}>
//               <PhoneBookEditor
//                 name={name}
//                 number={number}
//                 handleAddNewContact={this.handleAddNewContact}
//                 handleChangeInput={this.handleChangeInput}
//               />
//             </Section>
//             <Section title={"Contacts"}>
//               <Filter onChange={this.handleChangeFilter} filterValue={filter} />
//               <PhoneBookList
//                 contacts={contacts}
//                 onDeleteContact={this.onDeleteContact}
//               />
//             </Section>
//           </Section>
//         </Container>
//       </div>
//     );
//   }
// }

// export default App;
