import { Person } from "./components/Person";
import Greet from "./components/greet"
import { personList } from "./components/personList";

const App = () => {
  const name = {
    first: "Sudhir",
    last: "Kumar"
  };

  const list = [
    {
      first: "Sudhir",
      last: "Kumar"
    },
    {
      first: "Sudhir",
      last: "Kumar"
    },
    {
      first: "Sudhir",
      last: "Kumar"
    }
  ];

  return (
    <div>
      <Greet name="Sudhir" age={29} loggedIn={true} />
      <Person name={name} />
      <personList list={list} />
    </div>
  );
};

export default App;
