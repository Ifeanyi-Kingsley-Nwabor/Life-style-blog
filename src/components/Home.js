import React from 'react'
import PostCard from './PostCard';
import { useParams } from 'react-router';

const Home = ({content}) => {
    const { id } = useParams();
    const contentId = content && content.filter((article) => 
    id ? id === article.sys.id : article
    ); console.log(contentId)
    return (
        <div>
            {content && content
            .filter((article) => id ? id ===article.sys.id : article)
            .map((article, index) => <PostCard article={article} id={id} key={index}/>)}
            
        </div>
    )
}

export default Home;
