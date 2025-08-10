import { useRef } from "react";
import { Navbar } from "../../components";
import {
  AboutSection,
  Hero,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  MidSection,
  MidContent,
  MidText,
  EndSection,
  EndTitle,
  EndSubtitle,
  ContactInfo,
} from "./AboutUs.styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const NavbarProps = {
  title: "pimlpk",
  spant: "Travels",
  An1: "Home",
  An2: "Services",
  An3: "About Us",
  An4: "Contact Us",
  email: "pimlgt5@outlook.com",
  phone: "03212385555",
};

const AboutUs = () => {
  const heroRef = useRef(null);
  const midTextRef = useRef(null);
  const endRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroRef.current, { opacity: 0, y: 50, duration: 1 });

    gsap.from(midTextRef.current, {
      scrollTrigger: { trigger: midTextRef.current, start: "top 80%" },
      opacity: 0,
      x: -50,
      duration: 1,
    });

    gsap.from(endRef.current, {
      scrollTrigger: { trigger: endRef.current, start: "top 85%" },
      scale: 0.9,
      opacity: 0,
      duration: 1,
    });
  }, []); // Empty dependency means run once

  return (
    <>
      <Navbar {...NavbarProps} />
      <AboutSection>
        {/* Hero Section */}
        <Hero>
          <HeroContent ref={heroRef}>
            <HeroTitle>Who We Are</HeroTitle>
            <HeroSubtitle>
              We are a trusted immigration consultancy helping people achieve
              their dreams of studying, working, and living abroad. We also
              offer expert IELTS preparation and visa inquiry services.
            </HeroSubtitle>
            <HeroButton>Get Started</HeroButton>
          </HeroContent>
        </Hero>

        {/* Mid Section */}
        <MidSection>
          <MidContent ref={midTextRef}>
            <MidText>
              At <strong>Pimlpk Travels</strong>, we specialize in providing
              top-notch immigration consultancy for students, professionals, and
              families. Our team of experts ensures a smooth journey from
              application to approval. Whether it's IELTS preparation, visa
              guidance, or immigration planning, we’ve got you covered with
              personalized advice and proven strategies.
            </MidText>
          </MidContent>
        </MidSection>

        {/* End Section */}
        <EndSection ref={endRef}>
          <EndTitle>Start Your Journey Today</EndTitle>
          <EndSubtitle>
            Contact us now for a free consultation and take the first step
            towards your dreams.
          </EndSubtitle>
          <ContactInfo>📧 ali@example.com | 📞 03212385555</ContactInfo>
        </EndSection>
      </AboutSection>
    </>
  );
};

export { AboutUs };
