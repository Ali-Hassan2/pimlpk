import styled from "styled-components";

const colors = {
  red: "#fd4a4a",
  gray: "#25252a",
};

const MainContentSection = styled.div`
  min-height: 90vh;
  width: 100%;
  background-color: ${colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const HeadingTwo = styled.h2`
  color: white;
  margin-bottom: 50px;
  font-size: clamp(20px, 2vw, 32px);
  font-family: Mulish;
  text-align: center;
`;

const FormSection = styled.div`
  width: 100%;
  max-width: 1500px;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const LeftContact = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 80px;

  @media (max-width: 1024px) {
    width: 100%;
    padding-top: 20px;
  }
`;

const RightContact = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 0 10px;
`;

const Input = styled.input`
  width: 90%;
  height: 60px;
  background-color: transparent;
  border-bottom: 1px solid ${colors.red};
  border-radius: 20px;
  padding-left: 20px;
  font-size: clamp(16px, 1.2vw, 20px);
  font-family: Mulish;
  color: white;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 90%;
  height: 120px;
  padding-top: 20px;
  background-color: transparent;
  border-bottom: 1px solid ${colors.red};
  border-radius: 20px;
  padding-left: 20px;
  font-size: clamp(16px, 1.2vw, 20px);
  font-family: Mulish;
  color: white;
  outline: none;
  resize: none;
`;

const Button = styled.button`
  padding: 15px 30px;
  margin-bottom: 20px;
  border-radius: 20px;
  outline: none;
  border: none;
  background-color: ${colors.red};
  box-shadow: 1px 1px 10px black;
  color: black;
  font-family: Mulish;
  font-size: clamp(14px, 1vw, 18px);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 1024px) {
    max-height: 400px;
    border-radius: 10px;
  }
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
  Image,
};
