import React, { useState, useEffect } from "react";

import AuthorArt from "./AuthorArt";

const Authors = () => {
  const [authors, setAuthors] = useState();
  
  const url = "http://localhost:3004/api/authors";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
       // console.log(data)
        setAuthors(data);
        
      });
  }, [url]);

  return (
    <div>{authors && <AuthorArt authors={authors} />}</div>
  );
};

export default Authors;
