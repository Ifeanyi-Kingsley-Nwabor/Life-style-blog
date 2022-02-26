import React from "react";
import { Container, Segment } from "semantic-ui-react";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";

const SocialShareIcon = () => {
  return (
    <div>
      <Container>
        <Segment>
          <FacebookShareButton
            url="https://youtu.be/2BnTYEafRQc"
            quotes={"Hey subscribe to my Blog for more enriching articles."}
            hashtag="#Lifestyle"
          >
            {" "}
            <FacebookIcon
              className="facebookIcon"
              logoFillColor="white"
              round={true}
            ></FacebookIcon>
          </FacebookShareButton>
          <WhatsappShareButton
            title="Sharing content"
            url="https://youtu.be/2BnTYEafRQc"
          >
            {" "}
            <WhatsappIcon
              className="whatsappIcon"
              logoFillColor="white"
              round={true}
            ></WhatsappIcon>
          </WhatsappShareButton>
        </Segment>
      </Container>
    </div>
  );
};

export default SocialShareIcon;
