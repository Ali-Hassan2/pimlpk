import React from "react";
import {
  FooterSection,
  FooterUpper,
  Left,
  Right,
  FooterMiddle,
  FooterLower,
} from "./Footer.styles";
const Footer = () => {
  return (
    <FooterSection>
      <FooterUpper>
        <Left>This is the left section</Left>
        <Right>THis is the right section</Right>
      </FooterUpper>

      <FooterMiddle></FooterMiddle>

      <FooterLower></FooterLower>
    </FooterSection>
  );
};

export { Footer };
