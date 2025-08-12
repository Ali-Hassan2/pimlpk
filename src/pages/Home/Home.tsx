import {
  Navbar,
  Banner,
  HomeTwo,
  Home3,
  Footer,
  Success,
} from "../../components";
import { PageWrapper } from "./Home.style";

const Home = () => {
  const NavbarProps = {
    title: "PIML",
    spant: "CONSULTANTS",
    An1: "Home",
    An2: "Services",
    An3: "About Us",
    An4: "Contact Us",
    email: "pimlgt5@outlook.com",
    phone: "03000239023",
  };

  return (
    <>
      <PageWrapper>
        <Navbar {...NavbarProps} />
        <Banner />
      </PageWrapper>
      <HomeTwo />
      <Success />
      <Home3 />
      <Footer />
    </>
  );
};

export { Home };
