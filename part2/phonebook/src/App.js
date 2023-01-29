import { useEffect, useState } from "react";
import Item from "./component/Item";
import personService from "./service/person";

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPerson) => setPersons(initialPerson));
  }, [persons]);

  const addNew = (e) => {
    const person = persons.find((person) => person.name === newName);
    e.preventDefault();
    const newObject = {
      name: newName,
      number: number,
      id: persons.length + 1,
    };
    setPersons(persons.concat(newObject));
    setNewName("");

    if (person) {
      window.confirm("already added to the phoneook");
    }
  };

  const handlePerson = (e) => {
    setNewName(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const deletePerson = (person) => {
    personService
      .deletePerson(person.id)
      .then((persons) => setPersons(persons));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNew}>
        <div>
          name: <input onChange={handlePerson} />
        </div>
        <div>
          number: <input onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* <Person persons={persons} deleteHandler={() => deleteHandler()} /> */}
      {persons.map((person) => (
        <Item
          key={person.id}
          item={person}
          deleteHandler={() => deletePerson(person)}
        />
      ))}
    </div>
  );
};

export default App;
