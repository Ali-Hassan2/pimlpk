import { BoxCard, IconWrapper } from "./Boxes.style";

interface boxtype {
  name: string;
  icon: any;
  description: string;
  buttonText: string;
}

interface BoxProps {
  box: boxtype;
}

const Boxes = ({ box }: BoxProps) => {
  return (
    <BoxCard>
      <IconWrapper>{box.icon}</IconWrapper>
      <h2>{box.name}</h2>
      <p>{box.description}</p>
      <button>{box.buttonText}</button>
    </BoxCard>
  );
};

export default Boxes;
