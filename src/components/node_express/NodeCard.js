import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import AuthorCard from "./authors/AuthorCard";
import { Link } from "react-router-dom";
import SocialShareIcon from "../SocialShareIcon";
import parse from "html-react-parser";

const NodeCard = ({ article, id }) => {
  const [shareIcon, setShareIcon] = useState(false);
  // // console.log(article)
  const handleClick = (e) => {
    e.preventDefault();

    setShareIcon(true);
  };
// const {first_name, last_name} = AuthorCard;
// const author = {first_name, last_name} ;
  // console.log(id);
  /*console.log(article.fields)*/

 return (
    <div className="card_block">
      <Card
        border="primary"
        className="cardContainer"
        style={{ width: "35rem" }}
      >
        <Card.Img
          variant="top"
          className="cardPhoto"
          src={`http://localhost:3004${article.featured_image}`}
        />
        <Card.Body className="card_body">
          <Card.Title className="card_title">{article.name}</Card.Title>
          {id ? (
            <Card.Text className='card_description'>{parse(article.description)}</Card.Text>
          ) : (
            <Card.Text className='read_article'>
              <Link to={`/${article.id}`}>Read article</Link>
            </Card.Text>
          )}
          {/* <Card.Text className='card_description'>{parse(article.description)}</Card.Text> */}
          <Card.Title className="card_author">{article.first_name} {article.last_name}</Card.Title>
          
          {/* <Card.Link href="<AuthorCard/>" ><AuthorCard /></Card.Link> */}
          <Card.Link className="card_link" href="#" onClick={handleClick}>
            Share
          </Card.Link>
          {shareIcon && <SocialShareIcon />}
        </Card.Body>
      </Card>
    </div>
  );
};

export default NodeCard;
