import React from "react";
import { graphql } from "gatsby";
import "twin.macro";

import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Container from "../components/common/Container";
import ProjectGallery from "../components/ProjectGallery";

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      gallery {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const Project = ({ data }) => {
  const project = data.projectsJson;

  return (
    <Layout>
      <div tw="bg-gray-100 h-screen">
        <Nav inverted />
        <Header title={project.title} caption="Project" />
        <Container>
          <ProjectGallery images={project.gallery} />
        </Container>
      </div>
    </Layout>
  );
};

export default Project;
