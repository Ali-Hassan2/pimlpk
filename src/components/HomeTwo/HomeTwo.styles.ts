import styled from "styled-components";
const HomeTwoSection = styled.div`
  height: 100vh;
  width: 100vw;
  border: 3px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const LeftSection = styled.div`
  width: 50%;
  height: 100%;
  border: 2px solid brown;
  display: grid;
  place-items: center;
  position: relative;
`;

const ImageContainer = styled.div`
  height: 800px;
  width: 900px;
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
  border: 1px solid red;
  top: 450px;
  right: 100px;
  background-color: #fd4a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
`;

const RightSection = styled.div`
  width: 50%;
  height: 100%;
  border: 2px solid brown;
  display: flex;
  flex-direction: column;
  display: grid;
  gap: -200px;
  place-items: center;
`;

const RightUpper = styled.div`
  width: 80%;
  border: 1px solid blue;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
`;

const UpperHeading = styled.div`
  border: 1px solid black;
  font-size: 1.5vw;
  font-family: Mulish;
`;

const MainHeading = styled.div`
  border: 1px solid red;
  font-size: 4vw;
  font-family: Mulish;
`;

const RightLower = styled.div`
  width: 80%;
  border: 1px solid blue;
  height: 50%;
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
};
