import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
}
export default App;
