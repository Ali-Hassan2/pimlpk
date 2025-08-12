import { useRef, useState } from "react";
import { CiMail, CiHeadphones } from "react-icons/ci";
// import { GiHamburgerMenu } from "react-icons/gi";
import gsap from "gsap";
import lok from "../../assets/lok.jpeg";
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
  const buttonRef = useRef<HTMLButtonElement>(null);

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
              <TravelIcon>
                <img src={lok} alt="" />
              </TravelIcon>
              <span style={{ color: "#eeeeee" }}>{title}</span>
            </Container>
            <span
              style={{ color: "#894752", fontWeight: 400, marginLeft: "8px" }}
            >
              {spant}
            </span>
          </Headingtwo>

          <Anchors ref={anchorsRef} className="desktop-anchors">
            <Anchor to="/" onClick={() => setIsOpen(false)}>
              <span style={{ color: "red", fontWeight: 700 }}>{An1}</span>
            </Anchor>
            <Anchor to="/services" onClick={() => setIsOpen(false)}>
              {An2}
            </Anchor>
            <Anchor to="/aboutus" onClick={() => setIsOpen(false)}>
              {An3}
            </Anchor>
            <Anchor to="/contactus" onClick={() => setIsOpen(false)}>
              {An4}
            </Anchor>
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
            <Phone>
              <CiHeadphones />
              03000239013
            </Phone>
          </Info>
          <Button ref={buttonRef}>Request Call</Button>
        </Right>

        <MenuIcon onClick={() => setIsOpen(true)} />
      </Nav>

      <MobileMenu isOpen={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)}>×</CloseIcon>
        <Anchor to="/" onClick={() => setIsOpen(false)}>
          <span style={{ color: "red", fontWeight: 700 }}>{An1}</span>
        </Anchor>
        <Anchor to="/services" onClick={() => setIsOpen(false)}>
          {An2}
        </Anchor>
        <Anchor to="/aboutus" onClick={() => setIsOpen(false)}>
          {An3}
        </Anchor>
        <Anchor to="/contactus" onClick={() => setIsOpen(false)}>
          {An4}
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
