import styled from "styled-components";
const HomeTwoSection = styled.div`
  height: 100vh;
  width: 100vw;
  border: 3px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftSection = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  place-items: center;
  position: relative;
  

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  height: 800px;
  width: 900px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Boxi = styled.div`
  position: absolute;
  height: 240px;
  width: 240px;
  top: 450px;
  right: 100px;
  background-color: #fd4a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 180px;
    width: 180px;
    top: auto;
    bottom: 10%;
    right: 10%;
  }
`;

const Upper = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 10px;
`;
const Main = styled.div`
  height: 80%;
  width: 100%;
  font-size: 2vw;
  color: black;
  font-family: Mulish;
  padding-top: 30px;
  padding-left: 10px;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

const RightSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 40px 0;
  }
`;

const RightUpper = styled.div`
  width: 80%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
`;

const UpperHeading = styled.div`
  font-size: 1.5vw;
  font-family: Mulish;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

const MainHeading = styled.div`
  font-size: 4vw;
  font-family: Mulish;
`;

const RightLower = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    padding: 20px 0;
  }
`;

const LeftPara = styled.div`
  width: 600px;
  height: 100%;
  font-family: Mulish;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 10px;
  }
`;

const RightPara = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Mulish;
  width: 100%;
  padding: 10px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 10px;
  }
`;

const Span = styled.span`
  margin-top: 35px;

  @media (max-width: 1024px) {
    text-align: justify;
    width: 100%;
  }
`;

const Buttonn = styled.div`
  width: 60%;
  height: 50px;
  border: 1px solid #fd4a4a;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Mulish;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #fd4a4a;
  }

  @media (max-width: 768px) {
    width: 60%;
    height: 50px;
  }
`;

export {
  HomeTwoSection,
  LeftSection,
  RightSection,
  ImageContainer,
  Image,
  Boxi,
  Upper,
  Main,
  RightUpper,
  UpperHeading,
  MainHeading,
  RightLower,
  LeftPara,
  RightPara,
  Buttonn,
  UpperPara,
  Span,
};
