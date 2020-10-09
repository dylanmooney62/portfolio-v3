import React from "react";
import "twin.macro";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import AboutPanel from "../components/AboutPanel";
import ProjectsSection from "../components/ProjectsSection";
import Container from "../components/common/Container";
import ContactSection from "../components/ContactSection";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const IndexPage = () => (
  <Layout className="home">
    <SEO
      title="Dylan Mooney - Web Solutions"
      description="Results Driven Websites. Expert front-end web development services based in Glasgow, Scotland."
    />
    <Hero />
    <Container tw="relative z-10 -mt-12">
      <AboutPanel />
    </Container>
    <ProjectsSection />
    <ContactSection />
  </Layout>
);

export default IndexPage;
