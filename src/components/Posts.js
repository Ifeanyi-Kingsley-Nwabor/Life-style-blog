import React from 'react';
//import Post from './Post';
import PostCard from './PostCard';


const Posts = ({content}) => {
    return (
        <div>
            {content.map((article, index) => <PostCard article={article} key={index}/>)}
        </div>
    )
}

export default Posts;
