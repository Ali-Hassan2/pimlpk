import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiMail, CiHeadphones } from "react-icons/ci";

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #26252a;
  padding: 0 2rem;
  box-shadow: 0px 0.3px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1000;

  @media (max-width: 992px) {
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    height: 80px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 100%;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    &.desktop-right {
      display: none;
    }
  }
`;

export const Headingtwo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: "Mulish", sans-serif;
  font-size: 1.5rem;
  color: white;
  height: 100%;

  @media (max-width: 992px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const TravelIcon = styled.svg`
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
    width: 20px;
    height: 200px;
  }
`;

export const Anchors = styled.div`
  display: flex;
  gap: 2rem;
  height: 100%;
  align-items: center;

  @media (max-width: 992px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    &.desktop-anchors {
      display: none;
    }
  }
`;

export const Anchor = styled.a`
  position: relative;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
  font-family: "Mulish", sans-serif;
  cursor: pointer;
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: #fd4a4a;
  }

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

  @media (max-width: 992px) {
    font-size: 0.9rem;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 992px) {
    gap: 1rem;
  }
`;

export const Email = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Mulish", sans-serif;
  color: white;
  font-size: 0.9rem;

  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`;

export const Phone = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Mulish", sans-serif;
  color: white;
  font-size: 0.9rem;

  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  background-color: #fd4a4a;
  color: white;
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e83e3e;
  }

  @media (max-width: 992px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

export const MenuIcon = styled(GiHamburgerMenu)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #26252a;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  max-width: 300px;
  z-index: 1001;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  gap: 1.5rem;

  & > * {
    color: white;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
`;
