import React from "react";
import { Navbar } from "../../components";
import { ServicesSection, ServiceUpper, ServicesMid } from "./Services.styles";
import { GiCrossedAirFlows } from "react-icons/gi";
import Boxes from "./comps/Boxes";

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
  const BoxData: boxtype[] = [
    {
      name: "Student Services",
      icon: <GiCrossedAirFlows size={40} style={{ color: "#fd4a4a" }} />,
      description: "We offer Student Services too",
      buttonText: "Submit Form",
    },
    {
      name: "Student Services",
      icon: <GiCrossedAirFlows size={40} style={{ color: "#fd4a4a" }} />,
      description: "We offer Student Services too",
      buttonText: "Submit Form",
    },
    {
      name: "Student Services",
      icon: <GiCrossedAirFlows size={40} style={{ color: "#fd4a4a" }} />,
      description: "We offer Student Services too",
      buttonText: "Submit Form",
    },
    {
      name: "Student Services",
      icon: <GiCrossedAirFlows size={40} style={{ color: "#fd4a4a" }} />,
      description: "We offer Student Services too",
      buttonText: "Submit Form",
    },
    {
      name: "Student Services",
      icon: <GiCrossedAirFlows size={40} style={{ color: "#fd4a4a" }} />,
      description: "We offer Student Services too",
      buttonText: "Submit Form",
    },
    {
      name: "Student Services",
      icon: <GiCrossedAirFlows size={40} style={{ color: "#fd4a4a" }} />,
      description: "We offer Student Services too",
      buttonText: "Submit Form",
    },
  ];

  return (
    <>
      <Navbar {...NavbarProps} />
      <ServicesSection>
        <ServiceUpper>Services</ServiceUpper>
        <ServicesMid>
          {BoxData.map((bx, index) => (
            <div key={index}>
              <Boxes box={bx} />
            </div>
          ))}
        </ServicesMid>
      </ServicesSection>
    </>
  );
};

export { Services };
