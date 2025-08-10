import { Navbar } from "../../components";
import {
  ServicesSection,
  ServiceUpper,
  WhyChooseUs,
  ServicesMid,
} from "./Services.styles";
import { GiCrossedAirFlows } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
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
  icon: React.ReactNode;
  description: string;
  buttonText: string;
}
const Services = () => {
  const navigate = useNavigate();
  const BoxData: boxtype[] = [
    {
      name: "Student Services",
      icon: <GiCrossedAirFlows />,
      description: "We offer Student Services too",
      buttonText: "Submit Form",
    },
    {
      name: "Immigration Services ",
      icon: <GiCrossedAirFlows />,
      description: "We offer Student Services too",
      buttonText: "Submit Form",
    },
    {
      name: "IELTS Preparation",
      icon: <GiCrossedAirFlows />,
      description: "We offer Student Services too",
      buttonText: "Submit Form",
    },
    {
      name: "Travel & Ticketing",
      icon: <GiCrossedAirFlows />,
      description: "We offer Student Services too",
      buttonText: "Submit Form",
    },
    {
      name: "Tour Packages",
      icon: <GiCrossedAirFlows />,
      description: "We offer Student Services too",
      buttonText: "Submit Form",
    },
    {
      name: "Visa Consultancy",
      icon: <GiCrossedAirFlows />,
      description: "We offer Student Services too",
      buttonText: "Submit Form",
    },
  ];

  return (
    <>
      <Navbar {...NavbarProps} />
      <ServicesSection>
        <ServicesSection>
          <ServiceUpper>
            <span>Services</span>
            <span>
              We Offer Services You Can Trust Helping You Every Step of the Way
            </span>
          </ServiceUpper>
        </ServicesSection>
        <ServicesMid>
          {BoxData.map((bx, index) => (
            <div key={index}>
              <Boxes box={bx} />
            </div>
          ))}
        </ServicesMid>
        <WhyChooseUs>
          Why Choose Us? We Provide Reliable and Trusted Services Tailored to
          Your Needs.
          <br />
          <button onClick={() => navigate("/contactus")}>Contact Us</button>
        </WhyChooseUs>
      </ServicesSection>
    </>
  );
};

export { Services };
