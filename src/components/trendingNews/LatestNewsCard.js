import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';




const LatestNewsCard = ({article}) => {
    console.log(article.multimedia)
    return (
        <div>
            <Card border="primary" className="cardContainer card" style={{ width: '18rem' }}>
            
            <Card.Img variant="top" className='cardPhoto cardImg' src={article.multimedia[0].url} />
            <Card.Body className='card_body'>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.abstract}</Card.Text>
                <Card.Text>{article.byline}</Card.Text>
                <Card.Text>{article.published_date}</Card.Text>
                <a href={article.url} target='_blank'>Read Article</a>
                {/* <Card.Link href="#" onClick={handleClick}>Share</Card.Link> */}
            </Card.Body>
          </Card>
        </div>
    )
}

export default LatestNewsCard;