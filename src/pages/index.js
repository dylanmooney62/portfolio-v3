import React from "react";
import "twin.macro";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import AboutPanel from "../components/AboutPanel";
import ProjectsSection from "../components/ProjectsSection";
import Container from "../components/common/Container";
import ContactSection from "../components/ContactSection";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Container tw="relative z-10 -mt-12">
      <AboutPanel />
    </Container>
    <ProjectsSection />
    <ContactSection />
  </Layout>
);

export default IndexPage;
