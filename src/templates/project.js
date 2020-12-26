import React from "react";
import { graphql } from "gatsby";
import "twin.macro";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Container from "../components/common/Container";
import ProjectGallery from "../components/ProjectGallery";
import ProjectCaseStudy from "../components/ProjectCaseStudy";
import ProjectClient from "../components/ProjectClient";
import ProjectTechnology from "../components/ProjectTechnology";
import ProjectLinks from "../components/ProjectLinks";

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      slug
      client
      services
      caseStudy {
        brief
        solution
        features
      }
      links {
        site
        github
      }
      technologies
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

const Project = ({ data }) => {
  const project = data.projectsJson;
  // const otherProjects = data.allProjectsJson.edges;

  return (
    <Layout>
      <SEO title={`${project.title} | Dylan Mooney - Web Solutions`} />
      <div>
        <Nav />
        <Header title={project.title} caption="Project" />
        <ProjectGallery images={project.gallery} />
        <Container
          as="section"
          tw="py-10 md:py-16 lg:py-24 xl:flex xl:justify-between"
        >
          <div tw="xl:pt-2 mb-8">
            <ProjectClient
              client={project.client}
              services={project.services}
              url={project.links.site}
              tw="mb-8 xl:mb-12"
            />
            <ProjectTechnology
              technologies={project.technologies}
              tw="mb-10 xl:mb-12"
            />
            <ProjectLinks
              site={project.links.site}
              github={project.links.github}
              tw="mb-10 xl:mb-12"
            />
          </div>
          <ProjectCaseStudy tw="mb-8" caseStudy={project.caseStudy} />
        </Container>
      </div>
    </Layout>
  );
};

export default Project;
