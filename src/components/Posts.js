import React from 'react';
//import Post from './Post';
import Cards from './Cards';


const Posts = ({content}) => {
    return (
        <div>
            {content.map((article, index) => <Cards article={article} key={index}/>)}
        </div>
    )
}

export default Posts;
