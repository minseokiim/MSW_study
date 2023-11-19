import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode/todos")
      .then((res) => res.json())
      .then((json) => setTodo(json));
  });
  return <div className="App"></div>;
}

export default App;
