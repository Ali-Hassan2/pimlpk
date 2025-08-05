import React from "react";
import { CiMail, CiHeadphones } from "react-icons/ci";
import {
  Nav,
  Left,
  Right,
  Headingtwo,
  Anchor,
  TravelIcon,
  Anchors,
  Container,
  Info,
  Email,
  Phone,
  Button,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <Nav>
      <Left>
        <Headingtwo>
          <Container>
            <TravelIcon viewBox="0 0 24 24">
              <path fill="green" d="M12 2L15 8H9L12 2M2 22L22 22L12 13L2 22Z" />
            </TravelIcon>
            <span style={{ color: "#eeeeee" }}>pimlpk</span>
          </Container>
          <span
            style={{ color: "#894752", fontWeight: 400, marginLeft: "22px" }}
          >
            Travels
          </span>
        </Headingtwo>
        <Anchors>
          <Anchor>
            <span style={{ color: "red", fontWeight: 700 }}>Home</span>
          </Anchor>
          <Anchor>Services</Anchor>
          <Anchor>About Us</Anchor>
          <Anchor>Contact Us</Anchor>
        </Anchors>
      </Left>
      <Right>
        <Info>
          <Email>
            <CiMail />
            ali@email.com
          </Email>
          <Phone>
            <CiHeadphones />
            03212385555
          </Phone>
        </Info>
        <Button>Request Call</Button>
      </Right>
    </Nav>
  );
};

export { Navbar };
