import React from 'react'
//import PostCard from './PostCard';
import NodeCard from './node_express/NodeCard';

import { useParams } from 'react-router';

const Home = ({content}) => {
    const { id } = useParams();

    if (!content) {
        return (
            <h1>Loading...</h1>
        )
    }

    const filteredArticles = content
    .filter((article) => id ? Number(id) === article.id : article)

    console.log({filteredArticles})

    return (
        <div>
            {filteredArticles
            .map((article, index) => <NodeCard article={article} id={id} key={index}/>)}
        </div>
    )
}

export default Home;
