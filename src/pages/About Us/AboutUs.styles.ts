import styled from "styled-components";

export const AboutSection = styled.div`
  background-color: #25252a;
  color: white;
  font-family: Mulish;
`;

export const Hero = styled.section`
  height: 100vh;
  background: url("https://source.unsplash.com/1600x900/?travel,passport")
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

export const HeroContent = styled.div`
  max-width: 800px;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fd4a4a;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

export const HeroButton = styled.button`
  background-color: #fd4a4a;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.3s;
  &:hover {
    background-color: #e33b3b;
  }
`;

export const MidSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  background-color: #25252a;
  color: white;
`;

export const MidContent = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const MidText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const EndSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #1f1f23;
`;

export const EndTitle = styled.h2`
  font-size: 2rem;
  color: #fd4a4a;
  margin-bottom: 1rem;
`;

export const EndSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

export const ContactInfo = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;
    