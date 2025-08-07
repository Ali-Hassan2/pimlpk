import React, { useRef } from "react";
import { GiCrossedAirFlows } from "react-icons/gi";
import travel from "../../assets/travel.jpg";
import Boxes from "./components/Boxes";
import {
  HomeThreeSection,
  UpperBound,
  UpperLeft,
  UpperRight,
  Logo,
  MainHeading,
  MidBound,
  BoxesWrapper,
  LastSection,
  Report,
} from "./Home3.styles";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

interface boxiType {
  image: string;
  Logo: JSX.Element;
  text: string;
}

const Home3 = () => {
  const leftanimation = useRef<HTMLDivElement>(null);
  const rightanimation = useRef<HTMLDivElement>(null);
  const boxanimation = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (leftanimation.current && rightanimation.current) {
      gsap.from(leftanimation.current, {
        x: -200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: leftanimation.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(rightanimation.current, {
        x: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: rightanimation.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    if (boxanimation.current.length) {
      boxanimation.current.forEach((box) => {
        if (box) {
          gsap.from(box, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        }
      });
    }
  }, []);

  const BoxData: boxiType[] = [
    {
      image: travel,
      logo: <GiCrossedAirFlows size={40} style={{ color: "#fd4a4a" }} />,
      text: "MIGRATION SERVICES",
    },
    {
      image: travel,
      logo: <GiCrossedAirFlows size={40} style={{ color: "#fd4a4a" }} />,
      text: "STUDENT SERVICES",
    },
  ];

  return (
    <HomeThreeSection>
      <UpperBound>
        <UpperLeft ref={leftanimation}>
          <Logo>
            <GiCrossedAirFlows size={30} style={{ color: "#fd4a4a" }} /> Our
            Services
          </Logo>
          <MainHeading>We can support you no matter where you are</MainHeading>
        </UpperLeft>
        <UpperRight ref={rightanimation}>
          <span>
            We offer expert services in education, immigration, and consultancy,
            guiding students and professionals toward a brighter future. Whether
            you're pursuing higher studies abroad, seeking immigration
            opportunities, or need tailored consultancy, our experienced team
            provides end-to-end support. From university applications to visa
            processing and career counseling, we ensure every step is smooth,
            reliable, and transparent. Trust us to turn your aspirations into
            achievements with personalized and professional service.
          </span>
        </UpperRight>
      </UpperBound>
      <MidBound>
        {BoxData.map((boxi, index) => (
          <BoxesWrapper
            ref={(el) => {
              if (el) boxanimation.current[index] = el;
            }}
            key={index}
          >
            <Boxes boxinfo={boxi} />
          </BoxesWrapper>
        ))}
      </MidBound>
      <LastSection>
        <Report>View All Services</Report>
      </LastSection>
    </HomeThreeSection>
  );
};

export { Home3 };
