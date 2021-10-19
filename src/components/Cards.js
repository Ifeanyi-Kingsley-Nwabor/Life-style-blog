import React from 'react';
import Card from 'react-bootstrap/Card'

const Cards = ({article}) => {
    /*console.log(article.fields)*/
    return (
        <div className='card_block'>
            
          <Card border="primary" className="cardContainer" style={{ width: '35rem' }}>
            <Card.Img variant="top" className='cardPhoto' src={article.fields.featuredImage.fields.file.url} />
            <Card.Body className='card_body'>
                <Card.Title className='card_title'>{article.fields.name}</Card.Title>
                <Card.Text className='card_descrption'>{article.fields.description}</Card.Text>
                <Card.Text className='card_nameAuthor'>by: {article.fields.nameOfAuthor}</Card.Text>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup> */}
            {/* <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
          </Card>
          

        </div>
    )
}


export default Cards;
