import styled from "styled-components";

const colors = {
  red: "#fd4a4a",
  gray: "#25252a",
};

export const SuccessPageWrapper = styled.div`
  min-height: 70vh;
  padding: 4rem 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.gray};
  font-family: "Mulish", sans-serif;
  text-align: center;
  width: 100vw;

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

export const UpperSection = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 400;
  margin-bottom: 3rem;
  color: black;
  letter-spacing: 2px;
  user-select: none;
  width: 100%;
  display: flex;
  padding-left: 170px;

  @media (max-width: 900px) {
    padding-left: 50px;
  }

  @media (max-width: 480px) {
    padding-left: 0;
    justify-content: center;
  }
`;

export const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 4rem;
  width: 80%;
  justify-items: center;
  overflow: hidden;

  @media (max-width: 1200px) {
    gap: 3rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    width: 95%;
    gap: 2.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const StoryCard = styled.div`
  cursor: pointer;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:focus,
  &:hover {
    filter: drop-shadow(0 5px 8px rgba(253, 74, 74, 0.6));
    transform: translateY(-8px);
    transition: all 0.3s ease;
  }
`;

export const StoryImage = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${colors.red};
  box-shadow: 0 5px 15px rgba(253, 74, 74, 0.3);
  transition: transform 0.3s ease;

  ${StoryCard}:hover &,
  ${StoryCard}:focus & {
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 480px) {
    width: 110px;
    height: 110px;
  }
`;

export const StarWrapper = styled.div`
  margin-top: 30px;
  color: ${colors.red};
  font-size: 1.5rem;
  user-select: none;
  pointer-events: none;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
    font-size: 1rem;
  }
`;
