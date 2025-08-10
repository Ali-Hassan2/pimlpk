"use client";

import { useRef } from "react";
import {
  Hero,
  Container,
  Left,
  Right,
  Upper,
  Middle,
  Button,
  Image,
  Boxes,
  Box1,
  Box2,
  Lefting,
  Righting,
  HeadingOne,
  MainHeading,
  SmallHeading,
  Logo,
} from "./Banner.styles";

import travel from "../../assets/travel.jpg";
import { GiCrossedAirFlows } from "react-icons/gi";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CiHeadphones } from "react-icons/ci";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Banner = () => {
  const upperRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const smallHeadingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const boxesRef = useRef<HTMLDivElement>(null);
  const box1LeftRef = useRef<HTMLDivElement>(null);
  const box1RightRef = useRef<HTMLDivElement>(null);
  const box2LeftRef = useRef<HTMLDivElement>(null);
  const box2RightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    tl.from(upperRef.current, { x: -100, opacity: 0 })
      .from(headingRef.current, { y: 100, opacity: 0 }, "-=0.4")
      .from(smallHeadingRef.current, { y: 50, opacity: 0 }, "-=0.5")
      .from(buttonRef.current, { scale: 0.8, opacity: 0 }, "-=0.5")
      .from(imageRef.current, { x: 200, opacity: 0 }, "-=1.6")
      .from(boxesRef.current, { x: -400, opacity: 0 }, "-=1.3")
      .from(box1LeftRef.current, { x: -50, opacity: 0 }, "-=0.4")
      .from(box1RightRef.current, { x: 50, opacity: 0 }, "-=0.4")
      .from(box2LeftRef.current, { x: -50, opacity: 0 }, "-=0.4")
      .from(box2RightRef.current, { x: 50, opacity: 0 }, "-=0.4");
  }, []);

  return (
    <Hero>
      <Container>
        <Left>
          <Upper ref={upperRef}>
            <Logo>
              <GiCrossedAirFlows size={30} style={{ color: "white" }} />
            </Logo>
            <HeadingOne>Cooperation</HeadingOne>
          </Upper>

          <Middle>
            <MainHeading ref={headingRef}>We make you travel</MainHeading>
            <SmallHeading ref={smallHeadingRef}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur ex officiis pariatur iure, sit et, ipsum sequi sint
            </SmallHeading>
          </Middle>

          <Button ref={buttonRef}>Read More</Button>
        </Left>

        <Right>
          <Image ref={imageRef} src={travel} alt="travel" />
          <Boxes ref={boxesRef}>
            <Box1>
              <Lefting ref={box1LeftRef} style={{ color: "black" }}>
                <RxQuestionMarkCircled size={70} />
              </Lefting>
              <Righting ref={box1RightRef}>
                <span style={{ fontSize: "1vw", color: "black" }}>
                  Need Help?
                </span>
                <span
                  style={{
                    fontSize: "1.3vw",
                    color: "black",
                    textDecoration: "underline",
                  }}
                >
                  Raise Support Ticket
                </span>
              </Righting>
            </Box1>

            <Box2>
              <Lefting ref={box2LeftRef} style={{ color: "white" }}>
                <CiHeadphones size={70} />
              </Lefting>
              <Righting ref={box2RightRef}>
                <span style={{ fontSize: "1vw", color: "white" }}>
                  Need Help?
                </span>
                <span
                  style={{
                    fontSize: "1.3vw",
                    color: "white",
                    textDecoration: "underline",
                  }}
                >
                  Raise Support Ticket
                </span>
              </Righting>
            </Box2>
          </Boxes>
        </Right>
      </Container>
    </Hero>
  );
};

export { Banner };
