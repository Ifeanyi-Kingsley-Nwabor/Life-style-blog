import React from 'react';
import LatestNewsCard from './LatestNewsCard';

const TrendingArticles = ({latestNews})  => {
  
    return (
        <div>
            {latestNews.slice(0, 10).map((article, index) => <LatestNewsCard article={article} key={index}/>)}
        </div>
    )
}

export default TrendingArticles;