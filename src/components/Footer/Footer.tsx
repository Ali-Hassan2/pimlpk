import React from "react";
import {
  FooterSection,
  FooterMiddle,
  FooterLower,
  MiddleLeft,
  MiddleRight,
} from "./Footer.styles";
const Footer = () => {
  return (
    <FooterSection>
      <FooterMiddle>
        THis si the middle section
        <MiddleLeft></MiddleLeft>
        <MiddleRight></MiddleRight>
      </FooterMiddle>

      <FooterLower>THis is the lower section.</FooterLower>
    </FooterSection>
  );
};

export { Footer };
