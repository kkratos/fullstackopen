import List from "./List";
import Header from "./Header";
import Total from "./Total";

const Course = ({ course }) => (
  <div>
    {course.map((course) => (
      <div key={course.id}>
        <Header name={course.name} />
        <List items={course.parts} />
        <Total items={course.parts} />
      </div>
    ))}
  </div>
);

export default Course;
