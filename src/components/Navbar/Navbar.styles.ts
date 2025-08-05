import styled from "styled-components";
const Nav = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  padding: 0 0px;
  box-shadow: 0px 0.3px 15px black;
  position: fixed;
  z-index: 999;

  @media (max-width: 786px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 60px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding-left: 0;
    margin-bottom: 10px;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-left: 250px;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;
  }
`;

const Headingtwo = styled.div`
  height: 100%;
  font-weight: 600;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Mulish", sans-serif;
  font-size: 1.5vw;
  background-color: #26252a;
  padding: 0 10px;

  @media (max-width: 768px) {
    font-size: 5vw;
    width: 100%;
  }
`;

const Anchors = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  height: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
`;

const Anchor = styled.div`
  position: relative;
  font-size: 0.9vw;
  text-decoration: none;
  font-weight: 500;
  font-family: "Mulish", sans-serif;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background-color: green;
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const TravelIcon = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  animation: fly 1.5s infinite ease-in-out;

  @keyframes fly {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 768px) {
    width: 6vw;
    height: 6vw;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Email = styled.span`
  font-size: 0.9vw;
  font-family: Mulish;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const Phone = styled.span`
  font-size: 0.9vw;
  font-family: Mulish;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const Button = styled.div`
  background-color: #fd4a4a;
  height: 100%;
  width: 30%;
  color: white;
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  color: black;
  white-space: nowrap;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e83e3e;
  }

  @media (max-width: 768px) {
    font-size: 3vw;
    padding: 20px 50px;
  }
`;

export {
  Nav,
  Left,
  Right,
  Headingtwo,
  Anchor,
  TravelIcon,
  Anchors,
  Container,
  Info,
  Email,
  Phone,
  Button,
};
