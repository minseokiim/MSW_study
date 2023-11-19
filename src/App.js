import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodo(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
