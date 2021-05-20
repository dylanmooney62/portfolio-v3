import React from "react";
import PropTypes from "prop-types";
import "twin.macro";

import ProjectCard from "./ProjectCard";

const ProjectCardList = ({ projects, limit }) => {
  return (
    <ul tw="grid gap-4 items-center max-w-sm mx-auto md:grid-cols-2 md:max-w-none lg:col-gap-8 lg:max-w-4xl xl:grid-cols-3 xl:max-w-none">
      {projects
        .filter((_, index) => index < limit)
        .map(({ node: { slug, thumbnail, logo, services } }) => (
          <li tw="mb-5 w-full" key={slug}>
            <ProjectCard
              slug={slug}
              thumbnail={thumbnail}
              logo={logo}
              services={services}
            />
          </li>
        ))}
    </ul>
  );
};

ProjectCardList.defaultProps = {
  limit: 6,
};

ProjectCardList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  limit: PropTypes.number,
};

export default ProjectCardList;
