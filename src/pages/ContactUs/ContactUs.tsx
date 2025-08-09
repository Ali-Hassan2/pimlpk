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

interface formtypes {
  name: string;
  email: string;
  city: string;
  message: string;
}

const ContactUs = () => {
  const [formdata, setformdata] = useState<formtypes>({
    name: "",
    email: "",
    city: "",
    message: "",
  });
  return (
    <>
      <Navbar {...NavbarProps} />
    </>
  );
};

export { ContactUs };
