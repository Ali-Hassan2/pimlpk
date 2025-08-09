import styled from "styled-components";

const colors = {
  red: "#fd4a4a",
  gray: "#25252a",
};

const MainContentSection = styled.div`
  height: 90vh;
  width: 100vw;
  border: 6px solid ${colors.red};
  background-color: ${colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeadingTwo = styled.h2`
  color: white;
  margin-bottom: 50px;
  font-size: 2vw;
  font-family: Mulish;
`;

const FormSection = styled.div`
  width: 1500px;
  height: 700px;
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftContact = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid blue;
  padding-top: 80px;
`;

const RightContact = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid brown;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const Input = styled.input`
  width: 90%;
  height: 70px;
  background-color: transparent;
  border-bottom: 1px solid ${colors.red};
  border-radius: 20px;
  padding-left: 20px;
  font-size: 20px;
  font-family: Mulish;
  color: white;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 90%;
  height: 120px;
  padding-top: 50px;
  background-color: transparent;
  border-bottom: 1px solid ${colors.red};
  border-radius: 20px;
  padding-left: 20px;
  font-size: 20px;
  font-family: Mulish;
  color: white;
  outline: none;
`;

const Button = styled.button`
  padding: 20px 40px;
  margin-bottom: 20px;
  border-radius: 20px;
  outline: none;
  border: none;
  background-color: ${colors.red};
  box-shadow: 1px 1px 10px black;
  color: black;
  font-family: Mulish;
  cursor: pointer;
`;

export {
  MainContentSection,
  FormSection,
  LeftContact,
  RightContact,
  Form,
  Input,
  TextArea,
  HeadingTwo,
  Button,
};
