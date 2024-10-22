import React from "react";

function App() {
  const baseURL = "https://max-olofsson-backend-app.azurewebsites.net/";

  async function get(endpoint) {
    const res = await fetch(baseURL + endpoint);
    const data = await res.json();
    console.log("Inside get " + baseURL + endpoint);
    console.log("res:");
    console.log(res);
    return data;
  }

  const [authors, setAuthors] = useState([]);

  useEffect(
    () =>
      async function () {
        const res = await get("authors");
        console.log(res);
        setAuthors(res.data);
      },
    []
  );

  const value = "World";
  return <div>Hello {value} v2</div>;
}

export default App;
