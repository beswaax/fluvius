import React from "react";

import Header from "../src/components/headers/Header7";
import Content from "../src/components/how-it-works/HowItWorks1";
import Content2 from "../src/components/content/Content1";
import Testimonials from "../src/components/testimonials/TestimonalsWithoutLogo";
import ContactDetails from "../src/components/contact/ContactBasic";

export default function Index() {
  return (
    <div>
      <Header />
      <Content />
      <Content2 />
      <Testimonials />
      <ContactDetails />
    </div>
  );
}
