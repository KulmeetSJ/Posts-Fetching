import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();

function ApiContextProvider(props) {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <ApiContext.Provider value={{ posts, loading }}>
      {props.children}
    </ApiContext.Provider>
  );
}

export default ApiContextProvider;
