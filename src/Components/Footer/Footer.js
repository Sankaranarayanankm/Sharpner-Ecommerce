import React from "react";
import { Container } from "react-bootstrap";
import facebookLogo from "../../assests/facebook.png";
import spotifyLogo from "../../assests/spotify.png";
import youtubeLogo from "../../assests/youtube.png";
const Footer = () => {
  return (
    <footer>
      <Container
        className="bg-primary d-flex justify-content-between p-5"
        fluid
      >
        <h2 className="text-white " style={{ fontSize: "60px" }}>
          The Generics
        </h2>
        <div >
          <a href="https://www.facebook.com" className="p-5">
            <img src={facebookLogo} alt="facebook" />
          </a>
          <a href="https://www.spotify.com" className="p-5">
            <img src={spotifyLogo} alt="spotify" />
          </a>
          <a href="https://www.youtube.com" className="p-5">
            <img src={youtubeLogo} alt="youtube" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
