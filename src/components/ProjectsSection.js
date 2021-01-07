import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "twin.macro";

import Title from "./common/Title";
import Paragraph from "./common/Paragraph";
import Container from "./common/Container";
import ProjectCardList from "./ProjectCardList";

const ProjectsSection = () => {
  const query = useStaticQuery(graphql`
    {
      allProjectsJson {
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
  `);

  const projects = query.allProjectsJson.edges;

  return (
    <Container as="section" tw="py-16 md:py-20 lg:py-32" id="projects">
      <div tw="text-center mb-12 lg:mb-20">
        <Title tw="mb-3" variant="h2">
          Recent Projects
        </Title>
        <Paragraph>Projects I've had the pleasure of working on</Paragraph>
      </div>
      <ProjectCardList projects={projects} />
    </Container>
  );
};

export default ProjectsSection;
