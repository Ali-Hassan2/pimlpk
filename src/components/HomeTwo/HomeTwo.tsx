import { useRef } from "react";
import { GiCrossedAirFlows } from "react-icons/gi";
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
  LeftPara,
  RightPara,
  Buttonn,
  Span,
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
  const rightref = useRef<HTMLDivElement>(null);

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

    if (rightref.current) {
      gsap.fromTo(
        rightref.current,
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightref.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
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
      <RightSection ref={rightref}>
        <RightUpper>
          <UpperHeading>
            <GiCrossedAirFlows /> About Us
          </UpperHeading>
          <MainHeading>We create and turn into reality</MainHeading>
        </RightUpper>
        <RightLower>
          <LeftPara>
            PIMLPK Travel Agency is your trusted gateway to unforgettable
            journeys. With a commitment to excellence and customer satisfaction,
            they specialize in personalized travel experiences, from local
            adventures to international tours. Their professional team ensures a
            smooth and stress-free trip, offering affordable packages, visa
            assistance, and 24/7 support. Whether you're planning a family
            vacation, business trip, or spiritual tour, PIMLPK's dedication to
            quality service sets them apart in the travel industry. Discover the
            world with comfort, confidence, and care.
          </LeftPara>
          <RightPara>
            <Span>
              Choose PIMLPK to turn your travel dreams into reality. Their wide
              network of partners and years of experience guarantee that each
              journey is tailored to your needs. From flight bookings and hotel
              reservations to customized itineraries, their team handles
              everything with professionalism and integrity. What makes them
              truly unique is the personal touch they add to every service. For
              a hassle-free, memorable travel experience, PIMLPK is the name you
              can trust.
            </Span>
            <Buttonn>Read More</Buttonn>
          </RightPara>
        </RightLower>
      </RightSection>
    </HomeTwoSection>
  );
};

export { HomeTwo };
