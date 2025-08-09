import styled from "styled-components";

const FooterSection = styled.div`
  height: 100vh;
  background-color: #25252a;
  width: 100vw;
  border: 10px solid green;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 0;
`;

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

export { FooterSection, FooterMiddle, MiddleLeft, MiddleRight, FooterLower };
