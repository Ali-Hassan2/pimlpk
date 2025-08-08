import styled from "styled-components";

const FooterSection = styled.div`
  height: 100vh;
  width: 100vw;
  border: 10px solid blue;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterUpper = styled.div`
  width: 70%;
  height: 200px;
  border: 2px solid red;
  background-color: red;
`;

const Left = styled.div`
  border: 1px solid red;
`;
const Right = styled.div``;

const FooterMiddle = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid red;
`;
const FooterLower = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid green;
`;

const MiddleLeft = styled.div``;

const MiddleRight = styled.div``;

export {
  FooterSection,
  FooterUpper,
  Left,
  Right,
  FooterMiddle,
  MiddleLeft,
  MiddleRight,
  FooterLower,
};
