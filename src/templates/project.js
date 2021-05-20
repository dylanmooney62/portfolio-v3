import React from "react";
import { graphql } from "gatsby";
import "twin.macro";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Container from "../components/common/Container";
import ProjectGallery from "../components/project/ProjectGallery";
import ImageComparison from "../components/project/ImageComparison";
import ProjectCaseStudy from "../components/project/ProjectCaseStudy";
import ProjectClient from "../components/project/ProjectClient";
import ProjectTechnology from "../components/project/ProjectTechnology";
import ProjectLinks from "../components/project/ProjectLinks";

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
      comparison {
        left {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        right {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
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
        {project?.gallery && <ProjectGallery images={project.gallery} />}
        {project?.comparison && (
          <ImageComparison
            left={project.comparison.left}
            right={project.comparison.right}
          />
        )}
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
