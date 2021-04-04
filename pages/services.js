import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";

import PageHeader from "../src/components/headers/PageHeader";
import Features from "../src/components/features/Features4";
import HowItWorks from "../src/components/how-it-works/HowItWorks2";
import Contact from "../src/components/contact/ContactBasic";
import Content1 from "../src/components/content/ServicesPageContent1";
import Content2 from "../src/components/content/ServicesPageContent2";
import Content3 from "../src/components/content/ServicesPageContent3";

const useStyles = makeStyles((theme) => ({}));

const About = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <section>
      <PageHeader
        title={"Services"}
        description={
          "Forward thinking businesses use our services to ensure reliability and safety."
        }
      />
      <HowItWorks />
      <Content1 />
      <Content2 />
      <Content3 />
      <Contact />
    </section>
  );
};

export default About;
