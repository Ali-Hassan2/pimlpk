import React, { useState } from "react";
import { Navbar } from "../../components";
import {
  MainContentSection,
  FormSection,
  LeftContact,
  RightContact,
  Form,
  Input,
  TextArea,
  HeadingTwo,
  Button,
} from "./ContactUs.styles";
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

  const handleChange = (e) => {};

  const handlesubmit = (e) => {};

  return (
    <>
      <Navbar {...NavbarProps} />
      <MainContentSection>
        <HeadingTwo>
          <span style={{ color: "#fd4a4a" }}>Contact</span> Us
        </HeadingTwo>
        <FormSection>
          <LeftContact>
            <Form action="" onSubmit={handlesubmit}>
              <Input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formdata.name}
                onChange={}
              />
              <Input
                type="text"
                placeholder="Your Email"
                name="email"
                value={formdata.email}
                onChange={}
              />
              <Input
                type="text"
                placeholder="Your City"
                name="city"
                value={formdata.city}
                onChange={}
              />
              <TextArea
                name="message"
                placeholder="Your message here"
                value={formdata.message}
                onChange={}
              ></TextArea>
              <Button type="submit">Submit Message</Button>
            </Form>
          </LeftContact>
          <RightContact></RightContact>
        </FormSection>
      </MainContentSection>
    </>
  );
};

export { ContactUs };
