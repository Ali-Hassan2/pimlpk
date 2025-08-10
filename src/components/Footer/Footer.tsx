// Footer.jsx
import { useState, useEffect } from "react";
import {
  FooterSection,
  FooterContainer,
  FooterTop,
  Brand,
  BrandLogo,
  BrandText,
  NavGrid,
  NavColumn,
  ColumnTitle,
  NavLink,
  SubscribeCard,
  SubscribeForm,
  SubscribeInput,
  SubscribeButton,
  FooterBottom,
  SocialRow,
  SocialButton,
  Copyright,
  Credits,
} from "./Footer.styles";

import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const [subscriberCount, setSubscriberCount] = useState<number>(0);
  const [subscribed, setSubscribed] = useState<boolean>(false);

  useEffect(() => {
    const storedCount = localStorage.getItem("subscriberCount");
    const storedSubscribed = localStorage.getItem("subscribed");
    if (storedCount) setSubscriberCount(parseInt(storedCount, 10));
    if (storedSubscribed === "true") setSubscribed(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!subscribed) {
      const newCount = subscriberCount + 1;
      setSubscriberCount(newCount);
      localStorage.setItem("subscriberCount", newCount.toString());
      setSubscribed(true);
      localStorage.setItem("subscribed", "true");
    }
  };

  return (
    <FooterSection style={{ minHeight: "100vh" }}>
      <FooterContainer>
        <FooterTop>
          <Brand>
            <BrandLogo aria-hidden>✈️</BrandLogo>
            <div>
              <BrandText>Pimplpk Travel Agency</BrandText>
              <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>
                Your gateway to unforgettable journeys
              </div>
            </div>
          </Brand>

          <NavGrid>
            <NavColumn>
              <ColumnTitle>Destinations</ColumnTitle>
              <NavLink href="#">Hungary</NavLink>
              <NavLink href="#">Cyprus</NavLink>
              <NavLink href="#">Australia</NavLink>
            </NavColumn>

            <NavColumn>
              <ColumnTitle>About Us</ColumnTitle>
              <NavLink href="#">Our Story</NavLink>
              <NavLink href="#">Services</NavLink>
              <NavLink href="#">Customer Reviews</NavLink>
            </NavColumn>

            <NavColumn>
              <ColumnTitle>Contact</ColumnTitle>
              <NavLink href="mailto:pimlgt5@outlook.com">
                pimlgt5@outlook.com
              </NavLink>
              <NavLink href="#">Center Point Plaza, GTS Chowk, Gujrat</NavLink>
              <NavLink href="#">Pakistan</NavLink>
            </NavColumn>

            <SubscribeCard>
              <ColumnTitle>Stay updated</ColumnTitle>
              <p style={{ margin: 0, marginBottom: "0.75rem", opacity: 0.85 }}>
                Get exclusive travel deals and tips straight to your inbox.
              </p>
              <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                Subscribers: {subscriberCount}
              </p>

              <SubscribeForm onSubmit={handleSubscribe}>
                <SubscribeInput
                  type="email"
                  placeholder="Your email"
                  aria-label="Email address"
                  disabled={subscribed}
                />
                <SubscribeButton type="submit" disabled={subscribed}>
                  {subscribed ? "Subscribed" : "Subscribe"}
                </SubscribeButton>
              </SubscribeForm>
            </SubscribeCard>
          </NavGrid>
        </FooterTop>

        <FooterBottom>
          <SocialRow>
            <SocialButton href="#" aria-label="Instagram">
              <FaInstagram />
            </SocialButton>
            <SocialButton href="#" aria-label="Facebook">
              <FaFacebookF />
            </SocialButton>
            <SocialButton href="#" aria-label="Twitter">
              <FaTwitter />
            </SocialButton>
            <SocialButton href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </SocialButton>
            <SocialButton href="mailto:pimlgt5@outlook.com" aria-label="Email">
              <FaEnvelope />
            </SocialButton>
          </SocialRow>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Copyright>
              © {new Date().getFullYear()} Pimplpk Travel Agency. All rights
              reserved.
            </Copyright>
            <Credits>Made in Gujrat</Credits>
          </div>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

export { Footer };
