import styled from "styled-components";

export const BoxCard = styled.div`
  background: white;
  padding: 20px;
  width: 100%;
  max-width: 560px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  text-align: center;
  gap: 20px;
  height: auto;
  min-height: 300px;
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: Mulish, sans-serif;
  margin: auto;

  &:hover {
    border-color: #d32f2f;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin: 10px 0;
    color: #d32f2f;
    font-family: Mulish, sans-serif;
    font-size: clamp(1rem, 1.2vw, 1.5rem);
  }

  p {
    color: #555;
    font-size: clamp(0.9rem, 1vw, 1rem);
    margin-bottom: 15px;
    font-family: Mulish, sans-serif;
  }

  button {
    background-color: #d32f2f;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    font-family: Mulish, sans-serif;
    font-size: clamp(0.85rem, 1vw, 1rem);

    &:hover {
      background-color: #b71c1c;
    }
  }
`;

export const IconWrapper = styled.div`
  background-color: #fd4a4a;
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: white;
    width: 35px;
    height: 35px;
  }
`;
