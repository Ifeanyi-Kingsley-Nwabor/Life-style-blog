import React, { useState, useEffect } from "react";

import AuthorArt from "./AuthorArt";
const { REACT_APP_BACKEND_URL } = process.env;

const Authors = () => {
  const [authors, setAuthors] = useState();

  const url = `${REACT_APP_BACKEND_URL}/authors`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setAuthors(data);
      });
  }, [url]);

  return <div>{authors && <AuthorArt authors={authors} />}</div>;
};

export default Authors;
