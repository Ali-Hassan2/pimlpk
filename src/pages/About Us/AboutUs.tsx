import React from "react";
import { Navbar } from "../../components";

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
const AboutUs = () => {
  return (
    <>
      <Navbar {...NavbarProps} />
    </>
  );
};

export { AboutUs };
