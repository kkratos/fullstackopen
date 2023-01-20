import { useState } from "react";

const Header = (props) => {
  <h1>{props.name}</h1>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>
          {text}
          {value}
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>
        {text} {value}
      </td>
    </tr>
  );
};

const Statistics = ({ clicks }) => {
  const total = clicks.good + clicks.neutral + clicks.bad;
  const average = (clicks.good * 1 + clicks.bad * -1) / total;
  const positive = clicks.good * (100 / total);

  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={clicks.good} />
          <Statistic text="neutral" value={clicks.neutral} />
          <Statistic text="bad" value={clicks.bad} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });
  const handleGood = () => {
    setClicks({ ...clicks, good: clicks.good + 1 });
  };

  const handleNeutral = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  };
  const handleBad = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 });
  };

  return (
    <div>
      <Header name="Customer Feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neurtal" />
      <Button onClick={handleBad} text="Bad" />
      <Header name="Statistics" />
      <Statistics clicks={clicks} />
    </div>
  );
};

export default App;
