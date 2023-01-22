import Item from "./Item";

const Person = ({ persons }) => (
  <div>
    {persons.map((person) => (
      <Item key={person.id} item={person} />
    ))}
  </div>
);

export default Person;
