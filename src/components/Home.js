import React from 'react'
//import PostCard from './PostCard';
import NodeCard from './node_express/NodeCard';

import { useParams } from 'react-router';

const Home = ({content}) => {
    const { id } = useParams();
    const contentId = content && content.filter((article) => 
    id ? id === article.id : article
    ); console.log(contentId)
    return (
        <div>
            {content && content
            .filter((article) => id ? id ===article.id : article)
            .map((article, index) => <NodeCard article={article} id={id} key={index}/>)}
            
        </div>
    )
}

export default Home;
