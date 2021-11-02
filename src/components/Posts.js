import React from 'react';
//import Post from './Post';
//import PostCard from './PostCard';
import NodeCard from './node_express/NodeCard';

const Posts = ({content}) => {
    return (
        <div>
            {content.map((article, index) => <NodeCard article={article} key={index}/>)}
        </div>
    )
}

//export default Posts;
