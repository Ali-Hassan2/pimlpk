import styled from "styled-components";

const colors = {
  red: "#fd4a4a",
  gray: "#25252a",
};

const ServicesSection = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

const ServiceUpper = styled.div`
  width: 100%;
  min-height: 20%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Mulish, sans-serif;
  font-weight: 700;
  color: ${colors.red};
  background-color: ${colors.gray};
  flex-direction: column;
  text-align: center;

  span:first-child {
    font-size: 2.5rem; /* default desktop size */

    @media (max-width: 1024px) {
      font-size: 3rem; /* slightly larger for tablets */
    }

    @media (max-width: 768px) {
      font-size: 2rem; /* big on mobile */
    }
  }

  span:last-child {
    font-size: 1rem; /* default desktop size */
    margin-top: 10px;
    color: gray;
    max-width: 600px;

    @media (max-width: 1024px) {
      font-size: 0.1rem;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem; /* larger for mobile */
    }
  }
`;

const ServicesMid = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  box-sizing: border-box;
  margin-top: -800px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
    margin-top: -800px;
  }
`;
export const WhyChooseUs = styled.div`
  background-color: ${colors.gray};
  color: white;
  padding: 40px 20px;
  text-align: center;
  font-family: Mulish, sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  width: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  button {
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 1.1rem;
    font-weight: 700;
    background-color: ${colors.red};
    color: white;
    font-family: Mulish, sans-serif;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f1f1f1;
      color: black;
    }
  }

  @media (max-width: 1024px) {
    width: 70%;
    font-size: 1.2rem;
    padding: 30px 15px;
  }

  @media (max-width: 768px) {
    position: relative; /* avoid absolute on small devices */
    width: 90%;
    font-size: 1.1rem;
    padding: 20px 10px;
    border-radius: 20px 20px 0 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 1rem;
    padding: 15px 8px;
    border-radius: 15px 15px 0 0;
  }
`;

export { ServicesSection, ServiceUpper, ServicesMid };
