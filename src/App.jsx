import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://api.github.com/users/nihar-hegde");
      const data = await response.json();
      setUserData(data);
    };
    getData();
  }, []);
  return (
    <>
      <div>{JSON.stringify(userData)}</div>
    </>
  );
}

export default App;
