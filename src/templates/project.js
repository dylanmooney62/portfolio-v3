import React from "react";
import { graphql } from "gatsby";
import "twin.macro";

import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Container from "../components/common/Container";
import ProjectGallery from "../components/ProjectGallery";
import ProjectCaseStudy from "../components/ProjectCaseStudy";
import ProjectClient from "../components/ProjectClient";
import ProjectTechnology from "../components/ProjectTechnology";
import ProjectLinks from "../components/ProjectLinks";

import Divider from "../assets/svg/dashed-border-vertical.svg";

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      slug
      client
      caseStudy {
        challenge
        solution
        features
      }
      links {
        site
        github
      }
      gallery {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allProjectsJson(filter: { slug: { nin: [$slug] } }) {
      edges {
        node {
          slug
          title
          services
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo {
            publicURL
          }
        }
      }
    }
  }
`;

const client = {
  name: "Connecting Scotland",
  services: ["UI/UX", "Front-end"],
  site: "http://www.connectingscotland.org",
};

const technologies = ["react", "wordpress", "html", "javascript"];

const Project = ({ data }) => {
  const project = data.projectsJson;
  const otherProjects = data.allProjectsJson.edges;

  return (
    <Layout>
      <div tw="bg-gray-100">
        <Nav inverted />
        <Header title={project.title} caption="Project" />
        <ProjectGallery images={project.gallery} />
        <Container
          as="section"
          tw="py-10 md:py-20 lg:py-32 xl:flex xl:justify-between xl:flex-row-reverse"
        >
          <ProjectCaseStudy tw="mb-8" caseStudy={project.caseStudy} />
          <div>
            <Divider aria-hidden="true" tw="hidden h-full xl:block" />
          </div>
          <div tw="xl:pt-2">
            <ProjectClient client={client} tw="mb-8 xl:mb-12" />
            <ProjectTechnology
              technologies={technologies}
              tw="mb-10 xl:mb-12"
            />
            <ProjectLinks
              site={project.links.site}
              github={project.links.github}
              tw="mb-10 xl:mb-12"
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Project;
