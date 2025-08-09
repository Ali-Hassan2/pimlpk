import styled from "styled-components";

const HomeThreeSection = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 60px;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    padding-top: 40px;
    height: auto;
  }
`;

const UpperBound = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem 0;
  }
`;

const UpperLeft = styled.div`
  width: 40%;
  height: 100%;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const UpperRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Mulish;
  position: relative;
  top: 15px;

  @media (max-width: 768px) {
    width: 90%;
    top: 0;
    padding-top: 1rem;
  }
`;

const Logo = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  font-family: Mulish;
  font-size: 1vw;
  position: relative;
  top: 20px;

  @media (max-width: 768px) {
    font-size: 4vw;
    top: 0;
    margin-top: 10px;
  }
`;

const MainHeading = styled.div`
  font-size: 3vw;
  font-family: Mulish;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 6vw;
    text-align: center;
  }
`;

export const MidBound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  padding: 20px;
  background-color: #fafafa;
  margin-top: 100px;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    gap: 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 1.5rem 1rem;
    margin-top: 40px;
  }
`;

export const BoxesWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 400px;
  margin: 0px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const LastSection = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 70px;
  font-family: Mulish;
  color: red;
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  position: relative;
  z-index: 0;
  padding-top: 40px;
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    font-size: 1.2rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.8rem;
  }
`;

const Report = styled.div`
  transition: color 0.3s ease;
  position: relative;
  z-index: 0;
  &:hover {
    color: #fd4a4a;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export {
  HomeThreeSection,
  UpperBound,
  UpperLeft,
  UpperRight,
  Logo,
  MainHeading,
  LastSection,
  Report,
};
