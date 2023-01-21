const Total = ({ items }) => {
  const total = items.reduce(
    (accumulator, currentVal) => accumulator + currentVal.exercises,
    0
  );
  return (
    <p>
      <b>total of {total} exercise</b>
    </p>
  );
};
export default Total;
