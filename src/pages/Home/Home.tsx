import { Navbar, Banner, HomeTwo, Home3, Footer } from "../../components";
import { PageWrapper } from "./Home.style";

const Home = () => {
  const NavbarProps = {
    title: "pimlpk",
    spant: "Travels",
    An1: "Home",
    An2: "Services",
    An3: "About Us",
    An4: "Contact Us",
    email: "pimlgt5@outlook.com",
    phone: "03212385555",
  };

  return (
    <>
      <PageWrapper>
        <Navbar {...NavbarProps} />
        <Banner />
      </PageWrapper>
      <HomeTwo />
      <Home3 />
      <Footer />
    </>
  );
};

export { Home };
