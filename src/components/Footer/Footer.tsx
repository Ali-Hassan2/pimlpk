import React from "react";
import { FooterSection, FooterUpper, Left, Right } from "./Footer.styles";
const Footer = () => {
  return (
    <FooterSection>
      <FooterUpper>
        <Left></Left>
        <Right></Right>
      </FooterUpper>

      <FooterMiddle></FooterMiddle>
    </FooterSection>
  );
};

export { Footer };
