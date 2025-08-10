import React from "react";
import { Navbar } from "../../components";
import { ServicesSection, ServiceUpper, ServicesMid } from "./Services.styles";

const NavbarProps = {
  title: "pimlpk",
  spant: "Travels",
  An1: "Home",
  An2: "Services",
  An3: "About Us",
  An4: "Contact Us",
  email: "ali@example.com",
  phone: "03212385555",
};

interface boxtype {
  name: string;
  icon: JSX.Element;
  descriptiom: string;
  buttonText: string;
}
const Services = () => {
  const BoxData: boxtype[]=[
    {
      name:
    }
  ]

  return (
    <>
      <Navbar {...NavbarProps} />
      <ServicesSection>
        <ServiceUpper>Services</ServiceUpper>
        <ServicesMid></ServicesMid>
      </ServicesSection>
    </>
  );
};

export { Services };
