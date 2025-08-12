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
  title: "PIML",
  spant: "CONSULTANTS",
  An1: "Home",
  An2: "Services",
  An3: "About Us",
  An4: "Contact Us",
  email: "pimlgt5@outlook.com",
  phone: "03000239013",
};

interface boxtype {
  name: string;
  icon: React.ReactNode;
  description?: string;
  points?: string[];
  buttonText: string;
}

const Services = () => {
  const navigate = useNavigate();
  const BoxData: boxtype[] = [
    {
      name: "Student Services",
      icon: <GiCrossedAirFlows />,
      points: [
        "Popular Courses",
        "Educational Counselling Service",
        "Admin Procedure",
        "University/Country Selection",
        "Visa Assistance",
        "Application Procedure",
        "Financial Advice",
        "Pre-Departure Assistance",
        "Airport Pick-Up & Accommodation",
        "IELTS",
      ],
      buttonText: "Submit Form",
    },
    {
      name: "Immigration Services",
      icon: <GiCrossedAirFlows />,
      points: [
        "Partner Visa",
        "General Skilled Migration Visa",
        "Post Study Work Visa",
        "PR Visa Service",
        "Business Visa Service",
        "Skill Assessment",
      ],
      buttonText: "Submit Form",
    },
    {
      name: "IELTS Preparation",
      icon: <GiCrossedAirFlows />,
      points: [
        "PTE",
        "OXFORD",
        "TOEFL",
        "Languages",
        "Language Test",
        "Speaking Test",
      ],
      buttonText: "Submit Form",
    },
    {
      name: "Travel & Ticketing",
      icon: <GiCrossedAirFlows />,
      points: [
        "Flight Booking Assistance",
        "Hotel Reservations",
        "Customized Travel Itineraries",
        "Group & Corporate Travel Deals",
        "Travel Insurance Guidance",
        "Visa Application Support",
        "Airport Transfers & Pickups",
        "24/7 Customer Support During Travel",
      ],
      description: "We arrange travel and ticketing for your journey.",
      buttonText: "Submit Form",
    },
    {
      name: "Destinations",
      icon: <GiCrossedAirFlows />,
      points: [
        "UK",
        "USA",
        "AUSTRALIA",
        "FINNLAND",
        "CYPRUS",
        "BELGIUM",
        "GERMANY",
        "FRANCE",
        "GREEK",
        "HUNGARY",
        "SWEDEN",
        "CANADA",
      ],
      buttonText: "Submit Form",
    },
    {
      name: "Visa Consultancy",
      icon: <GiCrossedAirFlows />,
      points: [
        "Visa Eligibility Assessment",
        "Document Preparation Assistance",
        "Interview Preparation",
        "Legal Visa Advice",
        "Visa Renewal & Extension Support",
        "Student & Work Visa Guidance",
        "Business Visa Consultancy",
        "Fast-Track Visa Processing",
      ],
      description: "We provide visa consultancy for various countries.",
      buttonText: "Submit Form",
    },
  ];

  return (
    <>
      <Navbar {...NavbarProps} />
      <ServicesSection>
        <ServiceUpper>
          <span>Services</span>
          <span>
            We Offer Services You Can Trust Helping You Every Step of the Way
          </span>
        </ServiceUpper>

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
