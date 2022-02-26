import React from "react";
import Card from "react-bootstrap/Card";

const LatestNewsCard = ({ article }) => {
  // console.log(article.multimedia)
  return (
    <div className="trend_container">
      <Card
        border="primary"
        className="card_container"
        style={{ width: "35rem" }}
      >
        <Card.Img
          variant="top"
          className="cardPhoto cardImg"
          src={article.multimedia[0].url}
        />
        <Card.Body className="card_body">
          <Card.Title className="card_title">{article.title}</Card.Title>
          <Card.Text className="card_description">{article.abstract}</Card.Text>
          <Card.Text className="card_trend_author">{article.byline}</Card.Text>
          {/* <Card.Text className="card_date">
            {article.published_date}
          </Card.Text> */}
          <a
            className="card_link"
            href={article.url}
            target="_blank"
            rel=" noopener noreferrer"
          >
            Read Article
          </a>
          {/* <Card.Link href="#" onClick={handleClick}>Share</Card.Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default LatestNewsCard;
