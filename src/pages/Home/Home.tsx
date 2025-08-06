import React from "react";
import { Navbar, Banner, HomeTwo } from "../../components";
import { PageWrapper } from "./Home.style";

const Home = () => {
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

  return (
    <>
      <PageWrapper>
        <Navbar {...NavbarProps} />
        <Banner />
      </PageWrapper>
      <HomeTwo />
    </>
  );
};

export { Home };
