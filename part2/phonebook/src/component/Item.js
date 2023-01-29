const Item = ({ item, deleteHandler }) => (
  <div>
    <p>
      {item.name} {item.number}
    </p>
    <button onClick={deleteHandler}>delete</button>
  </div>
);

export default Item;
