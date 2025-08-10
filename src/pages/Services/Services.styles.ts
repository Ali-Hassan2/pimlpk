import styled from "styled-components";

const colors = {
  red: "#fd4a4a",
  gray: "#25252a",
};

const ServicesSection = styled.div`
  width: 100vw;
  height: 100vh;
  border: 5px solid red;
`;

const ServiceUpper = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Mulish;
  font-size: 2vw;
  font-weight: 700;
  color: ${colors.red};
  background-color: ${colors.gray};
`;

const ServicesMid = styled.div`
  border: 3px solid blue;
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { ServicesSection, ServiceUpper, ServicesMid };
