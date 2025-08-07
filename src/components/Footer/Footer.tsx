import React from "react";
import {
  FooterSection,
  FooterUpper,
  Left,
  Right,
  FooterMiddle,
} from "./Footer.styles";
const Footer = () => {
  return (
    <FooterSection>
      <FooterUpper>
        <Left></Left>
        <Right></Right>
      </FooterUpper>

      <FooterMiddle></FooterMiddle>

      <FooterLower></FooterLower>
    </FooterSection>
  );
};

export { Footer };
