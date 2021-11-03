import React from 'react';
import AuthorCard from './AuthorCard';
import { useParams } from 'react-router';

const AuthorArt = ({authors})  => {
    const { id } = useParams();

    if (!authors) {
        return (
            <h1>Loading...</h1>
        )
    }
  
    const filteredAuthors = authors && authors
    .filter((author) => id ? Number(id) === author.id : author)

    console.log({filteredAuthors})

    return (
        <div>
            {authors.map((author, index) => <AuthorCard author={author} id ={author.id} key={index}/>)}
        </div>
    )
}

export default AuthorArt;