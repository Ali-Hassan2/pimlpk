import React, { useRef, useState } from "react";
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
  Image,
} from "./ContactUs.styles";
import { showToast } from "../../Utils";
import contact from "../../assets/contact.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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

interface formtypes {
  name: string;
  email: string;
  city: string;
  message: string;
}

const ContactUs = () => {
  const Rightanimation = useRef<HTMLDivElement>(null);
  const Leftanimation = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (Leftanimation.current && Rightanimation.current) {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
      });

      tl.from(Leftanimation.current, {
        x: -80,
        opacity: 0,
        scale: 0.95,
      }).from(
        Rightanimation.current,
        {
          x: 80,
          opacity: 0,
          scale: 0.95,
        },
        "-=0.7"
      );
    }
  }, []);

  const [formdata, setformdata] = useState<formtypes>({
    name: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formdata.name || !formdata.email || !formdata.message) {
      showToast("Please fill in all required fields.", "warning");
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;
    const timer = 4000;
    const timeout = setTimeout(() => controller.abort(), timer);

    try {
      const baseUrl = "https://formspree.io/f/myzplkpw";
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        signal,
        body: JSON.stringify(formdata),
      });

      clearTimeout(timeout);

      if (!response.ok) {
        const error_Data = await response.json().catch(() => null);
        showToast("Cannot Send Message.", "error");
        throw new Error(error_Data?.message || "Something went wrong.");
      }

      showToast("Message Sent Successfully.", "success");
      setformdata({ name: "", email: "", city: "", message: "" });
    } catch (error: any) {
      if (error.name === "AbortError") {
        showToast("Request Timeout.", "error");
      } else {
        showToast(error?.message || "Unexpected Error.", "error");
      }
    }
  };

  return (
    <>
      <Navbar {...NavbarProps} />
      <MainContentSection>
        <HeadingTwo>
          <span style={{ color: "#fd4a4a" }}>Contact</span> Us
        </HeadingTwo>
        <FormSection>
          <LeftContact ref={Leftanimation}>
            <Form action="" onSubmit={handlesubmit}>
              <Input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formdata.name}
                onChange={handleChange}
              />
              <Input
                type="text"
                placeholder="Your Email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
              />
              <Input
                type="text"
                placeholder="Your City"
                name="city"
                value={formdata.city}
                onChange={handleChange}
              />
              <TextArea
                name="message"
                placeholder="Your message here"
                value={formdata.message}
                onChange={handleChange}
              ></TextArea>
              <Button type="submit">Submit Message</Button>
            </Form>
          </LeftContact>
          <RightContact ref={Rightanimation}>
            <Image src={contact}></Image>
          </RightContact>
        </FormSection>
      </MainContentSection>
    </>
  );
};

export { ContactUs };
