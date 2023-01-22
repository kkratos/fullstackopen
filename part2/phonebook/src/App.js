import { useState } from "react";
import Person from "./component/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040 - 123456", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");

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
      <Person persons={persons} />
    </div>
  );
};

export default App;
