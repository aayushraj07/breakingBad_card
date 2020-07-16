import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Result from "./result";

const App = () => {
  const [characters, setChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChars = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );

      console.log(result.data);
      setChars(result.data);
      setIsLoading(false);
    };
    fetchChars();
  }, []);

  return (
    <div className="container">
      <Result isLoading={isLoading} characters={characters} />
      Hello
    </div>
  );
};

export default App;
