import React, { useEffect, useState } from "react";

function App() {
  const baseURL = "https://max-olofsson-backend-app.azurewebsites.net/";

  const [authors, setAuthors] = useState([]);

  useEffect(
    () =>
      async function () {
        const res = await fetch(baseURL + "authors");
        const data = await res.json();
        console.log("Inside useEffect and get." + baseURL);
        setAuthors(data.data);
      },
    []
  );

  console.log(authors);

  const value = "World";
  return <div>Hello {value} v2</div>;
}

export default App;
