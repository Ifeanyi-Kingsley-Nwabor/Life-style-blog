import React from 'react';
import Card from 'react-bootstrap/Card'

const AuthorCard = ({author, id}) => {
  console.log(author)
    
    return (
        <div className="all_cont">
            
          <Card border="primary" className="authorContainer" style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" className='cardPhoto' src={article.featured_image} /> */}
            <Card.Body className='authorContainer'>
                <Card.Title className='card_nameAuthor'><h4><i>Name: {author.first_name} {author.last_name}</i></h4></Card.Title>
                <Card.Link to= '#' className='card_emailAuthor'>Email: {author.email}</Card.Link>
                <Card.Link to= '#' className='card_twitterAuthor'>twitter: {author.twitter}</Card.Link>

            </Card.Body>
          </Card>
          

        </div>
    )
}


export default AuthorCard;
