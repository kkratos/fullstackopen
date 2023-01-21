import Item from "./Item";

const List = ({ items }) => (
  <div>
    {items.map((item) => (
      <Item key={item.id} item={item.name} exercises={item.exercises} />
    ))}
  </div>
);

export default List;
