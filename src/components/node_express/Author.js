


import React from 'react';
import Card from 'react-bootstrap/Card'

const Author = ({article}) => {
    
    return (
        <div>
            
          <Card border="primary" className="cardContainer" style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" className='cardPhoto' src={article.featured_image} /> */}
            <Card.Body className='card_body'>
                <Card.Title className='card_nameAuthor'><i>by: {article.first_name} {article.last_name}</i></Card.Title>
                <Card.Link to= '#'>{article.email}</Card.Link>
                <Card.Link to= '#'>{article.twitter}</Card.Link>

            </Card.Body>
          </Card>
          

        </div>
    )
}


export default Author;
