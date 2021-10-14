import React from 'react'

const Post = ({article}) => {
    console.log(article);
    return (
        <div>
           <h2>{article.fields.name}</h2>
            <img src={article.fields.featuredImage.fields.file.url} />
            <section> {article.fields.description} </section>
        </div>
    )
}

export default Post
