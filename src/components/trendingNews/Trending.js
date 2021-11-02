import React, { useState, useEffect } from "react";

import TrendingArticles from "./TrendingArticles";

const Trending = () => {
  const [latestNews, setLatestNews] = useState();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const myApiKey = process.env.REACT_APP_NEW_YORK_TIMES_API;
  const url = `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${myApiKey}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLatestNews(data.results);
        // console.log(data.results)
      });
  }, [url]);

  return (
    <div>{latestNews && <TrendingArticles latestNews={latestNews} />}</div>
  );
};

export default Trending;
