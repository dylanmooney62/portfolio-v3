import React from "react";
import "twin.macro";

import ProjectCardList from "./ProjectCardList";
import Container from "./common/Container";
import StyledTitle from "./common/Title";

const MoreProjectsSection = ({ projects }) => {
  return (
    <section tw="py-16 md:py-20 lg:py-24">
      <Container>
        <div tw="text-center mb-12">
          <StyledTitle variant="h2" as="h2">
            More Projects
          </StyledTitle>
        </div>
        <ProjectCardList projects={projects} limit={3} />
      </Container>
    </section>
  );
};

export default MoreProjectsSection;
