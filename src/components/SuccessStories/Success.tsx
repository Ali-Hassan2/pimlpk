import { useEffect, useRef } from "react";
import {
  SuccessPageWrapper,
  UpperSection,
  StoriesGrid,
  StoryCard,
  StoryImage,
  StarWrapper,
} from "./Success.styles";

import sone from "../../assets/sone.jpeg";
import stwo from "../../assets/stwo.jpeg";
import sthree from "../../assets/sthree.jpeg";
import sfour from "../../assets/sfour.jpeg";
import sfive from "../../assets/sfive.jpeg";
import ssix from "../../assets/ssix.jpeg";
import sseven from "../../assets/sseven.jpeg";
import seight from "../../assets/seight.jpeg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  sone,
  stwo,
  sthree,
  sfour,
  sfive,
  ssix,
  sseven,
  seight,
];

const Success = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".story-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <SuccessPageWrapper>
      <UpperSection>Our Success Stories</UpperSection>

      <StoriesGrid ref={containerRef}>
        {stories.map((img, i) => (
          <StoryCard key={i} className="story-card" tabIndex={0}>
            <StoryImage src={img} alt={`Success story ${i + 1}`} />
            <StarWrapper>
              <FaStar />
            </StarWrapper>
          </StoryCard>
        ))}
      </StoriesGrid>
    </SuccessPageWrapper>
  );
};

export { Success };
