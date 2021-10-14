import React from 'react';
import Card from 'react-bootstrap/Card'

const Cards = ({article}) => {
    console.log(article.fields)
    return (
        <div>
            
          <Card border="primary" className="cardContainer" style={{ width: '18rem' }}>
            <Card.Img variant="top" className='cardPhoto' src={article.fields.featuredImage.fields.file.url} />
            <Card.Body className='card_body'>
                <Card.Title>{article.fields.name}</Card.Title>
                <Card.Text>{article.fields.description}</Card.Text>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup> */}
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          

        </div>
    )
}


export default Cards;
