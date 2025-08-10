import React from "react";

interface boxtype {
  name: string;
  icon: JSX.Element;
  description: string;
  buttonText: string;
}

interface BoxProps {
  box: boxtype;
}

const Boxes = ({ box }: BoxProps) => {
  return (
    <>
      <h2>{box.name}</h2>
      <h2>{box.icon}</h2>
      <h2>{box.description}</h2>
      <h2>{box.buttonText}</h2>
    </>
  );
};

export default Boxes;
