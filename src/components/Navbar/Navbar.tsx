import React, { useRef, useState } from "react";
import { CiMail, CiHeadphones } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
  MenuIcon,
  MobileMenu,
  CloseIcon,
} from "./Navbar.styles";

interface NavbarProps {
  title: string;
  spant: string;
  An1: string;
  An2: string;
  An3: string;
  An4: string;
  email: string;
  phone: string;
}

const Navbar = ({
  title,
  spant,
  An1,
  An2,
  An3,
  An4,
  email,
  phone,
}: NavbarProps) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const anchorsRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    if (headingRef.current)
      tl.from(headingRef.current, { x: -100, opacity: 0 });
    if (anchorsRef.current)
      tl.from(anchorsRef.current, { y: -50, opacity: 0 }, "-=0.4");
    if (emailRef.current && phoneRef.current)
      tl.from(
        [emailRef.current, phoneRef.current],
        { y: 30, opacity: 0, stagger: 0.2 },
        "-=0.5"
      );
    if (buttonRef.current)
      tl.from(buttonRef.current, { x: 200, opacity: 0 }, "-=0.4");
  }, []);

  return (
    <>
      <Nav>
        <Left>
          <Headingtwo ref={headingRef}>
            <Container>
              <TravelIcon viewBox="0 0 24 24">
                <path
                  fill="green"
                  d="M12 2L15 8H9L12 2M2 22L22 22L12 13L2 22Z"
                />
              </TravelIcon>
              <span style={{ color: "#eeeeee" }}>{title}</span>
            </Container>
            <span
              style={{ color: "#894752", fontWeight: 400, marginLeft: "22px" }}
            >
              {spant}
            </span>
          </Headingtwo>

          <Anchors ref={anchorsRef} className="desktop-anchors">
            <Anchor>
              <span style={{ color: "red", fontWeight: 700 }}>{An1}</span>
            </Anchor>
            <Anchor>{An2}</Anchor>
            <Anchor>{An3}</Anchor>
            <Anchor>{An4}</Anchor>
          </Anchors>
        </Left>

        <Right className="desktop-right">
          <Info>
            <Email ref={emailRef}>
              <CiMail />
              {email}
            </Email>
            <Phone ref={phoneRef}>
              <CiHeadphones />
              {phone}
            </Phone>
          </Info>
          <Button ref={buttonRef}>Request Call</Button>
        </Right>

        <MenuIcon onClick={() => setIsOpen(true)} />
      </Nav>

      <MobileMenu isOpen={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)}>×</CloseIcon>
        <Anchor onClick={() => setIsOpen(false)}>
          <span style={{ color: "red", fontWeight: 700 }}>{An1}</span>
        </Anchor>
        <Anchor onClick={() => setIsOpen(false)}>
          {" "}
          <Link to="/services">{An2}</Link>
        </Anchor>
        <Anchor onClick={() => setIsOpen(false)}>
          <Link>{An3}</Link>
        </Anchor>
        <Anchor onClick={() => setIsOpen(false)}>
          <Link>{An4}</Link>
        </Anchor>
        <Email>
          <CiMail />
          {email}
        </Email>
        <Phone>
          <CiHeadphones />
          {phone}
        </Phone>
        <Button>Request Call</Button>
      </MobileMenu>
    </>
  );
};

export { Navbar };
