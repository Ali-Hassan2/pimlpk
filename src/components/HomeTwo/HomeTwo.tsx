import React, { useRef } from "react";
import {
  HomeTwoSection,
  LeftSection,
  RightSection,
  ImageContainer,
  Image,
  Boxi,
  Upper,
  Main,
  UpperHeading,
  MainHeading,
  RightLower,
  RightUpper,
} from "./HomeTwo.styles";
import plane from "../../assets/plane.jpg";
import { FaPlayCircle } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HomeTwo = () => {
  const ImgContainer = useRef<HTMLDivElement>(null);
  const BoxiRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ImgContainer.current && BoxiRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ImgContainer.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.inOut" },
      });

      tl.fromTo(
        ImgContainer.current,
        {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 4,
        },
        "-=1.4"
      );

      tl.fromTo(
        BoxiRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=2"
      );
    }
  }, []);

  return (
    <HomeTwoSection>
      <LeftSection>
        <ImageContainer ref={ImgContainer}>
          <Image src={plane} alt="plane" />
        </ImageContainer>
        <Boxi ref={BoxiRef}>
          <Upper>
            <FaPlayCircle size={50} />
          </Upper>
          <Main>Watch Our Activites</Main>
        </Boxi>
      </LeftSection>
      <RightSection>
        <RightUpper>
          <UpperHeading>Logo About Us</UpperHeading>
          <MainHeading>We create and turn into reality</MainHeading>
        </RightUpper>
        <RightLower>
          
        </RightLower>
      </RightSection>
    </HomeTwoSection>
  );
};

export { HomeTwo };
