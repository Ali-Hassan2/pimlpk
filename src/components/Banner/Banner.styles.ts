import styled from "styled-components";

const Hero = styled.div`
  width: 100%;
  height: 100%;
  background-color: #25252a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  height: 80%;
  width: 80%;
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10%;
    width: 95%;
    height: auto;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: 0%;
    width: 95%;
    height: auto;
  }
`;

const Right = styled.div`
  position: relative;
  width: 70%;
  color: white;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    text-align: center;
  }
`;

const Left = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  z-index: 2;
  overflow-x: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div``;

const Upper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: end;
  padding-left: 80px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    justify-content: center;
    padding-left: 0;
  }
`;

const HeadingOne = styled.h2`
  text-transform: uppercase;
  color: #fd4a4a;
  font-family: Mulish;
  letter-spacing: 2px;
  font-weight: 600;
  margin-left: 10px;
`;

const Middle = styled.div`
  width: 1000px;
  height: 50%;
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: end;

  @media (max-width: 768px) {
    position: static;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const MainHeading = styled.h1`
  position: absolute;
  top: 20px;
  left: 80px;
  text-transform: uppercase;
  color: white;
  font-family: Mulish;
  font-size: 6vw;
  width: fit-content;
  font-weight: 200;

  @media (max-width: 1200px) {
    font-size: 4.5vw;
  }

  @media (max-width: 768px) {
    position: static;
    font-size: 7vw;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 8vw;
  }
`;

const SmallHeading = styled.span`
  width: 550px;
  font-family: Mulish;
  margin-left: 100px;
  color: #56565a;

  @media (max-width: 1200px) {
    width: 400px;
    margin-left: 50px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 10px auto;
    display: block;
  }
`;

const Button = styled.button`
  position: relative;
  top: 420px;
  left: 100px;
  padding: 0.8vw 2.5vw;
  font-family: "Mulish", sans-serif;
  background-color: #fd4a4a;
  border: none;
  outline: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid #fd4a4a;
    color: white;
  }

  @media (max-width: 1200px) {
    top: 400px;
    left: 70px;
    padding: 0.6vw 2vw;
  }

  @media (max-width: 768px) {
    position: static;
    margin: 20px auto;
  }
`;

const Image = styled.img`
  height: 90%;
  width: 100%;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Boxes = styled.div`
  width: 85%;
  max-width: 1200px;
  height: 200px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -12%;
  gap: 30px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    height: auto;
    bottom: -20%;
    gap: 20px;
    border: 3px solid yellow;
    font-size: 0.1vw;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    position: static;
    width: 100%;
    gap: 15px;
    padding: 20px 0;
    border: 3px solid yellow;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    font-size: 3vw; /* suitable for small screens */
    padding: 10px;
    width: 100%;
  }
`;

const Box1 = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fd4a4a;
  display: flex;

  @media (max-width: 1200px) {
    width: 90%;
    height: 100px;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 120px;
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 10px 0;
  }
`;

const Box2 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: #141414;

  @media (max-width: 1200px) {
    width: 90%;
    height: 100px;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 120px;
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 10px 0;
  }
`;

const Lefting = styled.div`
  width: 25%;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const Righting = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding-left: 30px;
  font-family: Mulish;

  @media (max-width: 768px) {
    align-items: center;
    padding-left: 0;
  }

  @media (max-width: 1200px) {
    span {
      font-size: 3vw !important;
    }
  }

  @media (max-width: 768px) {
    span {
      font-size: 4vw !important;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    span {
      font-size: 4.5vw !important;
    }
  }
`;

export {
  Hero,
  Container,
  Right,
  Left,
  HeadingOne,
  Logo,
  Upper,
  Middle,
  MainHeading,
  SmallHeading,
  Button,
  Image,
  Boxes,
  Box1,
  Box2,
  Lefting,
  Righting,
};
