import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';




const LatestNewsCard = ({article}) => {
    console.log(article.multimedia)
    return (
        <div>
            <Card border="primary" className="cardContainer card" style={{ width: '35rem' }}>
            
            <Card.Img variant="top" className='cardPhoto cardImg' src={article.multimedia[0].url} />
            <Card.Body className='card_body'>
                <Card.Title className='card_title'>{article.title}</Card.Title>
                <Card.Text className='card_description'>{article.abstract}</Card.Text>
                <Card.Text className='card_nameAuthor'>{article.byline}</Card.Text>
                <Card.Text className='card_nameAuthor'>{article.published_date}</Card.Text>
                <a className='card_link' href={article.url} target='_blank'>Read Article</a>
                {/* <Card.Link href="#" onClick={handleClick}>Share</Card.Link> */}
            </Card.Body>
          </Card>
        </div>
    )
}

export default LatestNewsCard;