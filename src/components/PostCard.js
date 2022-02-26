import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import SocialShareIcon from "./SocialShareIcon";

const PostCard = ({ article, id }) => {
  const [shareIcon, setShareIcon] = useState(false);
  // console.log(article)
  const handleClick = (e) => {
    e.preventDefault();
    // console.log("share me");
    setShareIcon(true);
  };

  // console.log(id);
  /*console.log(article.fields)*/
  return (
    <div className="card_block">
      <Card
        border="primary"
        className="cardContainer"
        // style={{ width: "55rem" }}
      >
        <Card.Img
          variant="top"
          className="cardPhoto"
          src={article.fields.featuredImage.fields.file.url}
        />
        <Card.Body className="card_body">
          <Card.Title className="card_title">{article.fields.name}</Card.Title>
          {id ? (
            <div className="card_description">{article.fields.description}</div>
          ) : (
            <Card.Text className="read_link">
              <Link to={`/${article.sys.id}`}>Read article</Link>
            </Card.Text>
          )}
          {/* <Card.Text className='card_descrption'>{article.fields.description}</Card.Text> */}
          <Card.Text className="card_nameAuthor">
            <i>by: {article.fields.nameOfAuthor}</i>
          </Card.Text>
          <Card.Link className="card_link" href="#" onClick={handleClick}>
            Share
          </Card.Link>
          {shareIcon && <SocialShareIcon />}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostCard;
