import React from "react";
import "twin.macro";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import AboutPanel from "../components/AboutPanel";
import ProjectsSection from "../components/ProjectsSection";
import Container from "../components/common/Container";
import ContactSection from "../components/ContactSection";

const IndexPage = () => (
  <Layout>
    <SEO title="Dylan Mooney - Web Solutions" />
    <Hero />
    <Container tw="relative z-10 -mt-12">
      <AboutPanel />
    </Container>
    <ProjectsSection />
    <ContactSection />
  </Layout>
);

export default IndexPage;
