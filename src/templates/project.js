import React from "react";
import { graphql } from "gatsby";
import "twin.macro";

import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Header from "../components/Header";

import mockup from "../assets/images/perspective-mockup.png";
import Container from "../components/common/Container";

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
    }
  }
`;

const Project = ({ data }) => {
  const project = data.projectsJson;

  return (
    <Layout>
      <Nav inverted />
      <Header title={project.title} caption="Project" />
      <Container>
        <div tw="mb-32">
          <img
            tw="w-full h-64 block shadow-lg"
            src={mockup}
            alt="Mock up project title"
          />
        </div>
      </Container>
    </Layout>
  );
};

export default Project;
