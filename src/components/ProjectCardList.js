import React from "react";
import "twin.macro";

import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <ul tw="grid gap-4 items-center max-w-sm mx-auto md:grid-cols-2 md:max-w-none lg:col-gap-8 lg:max-w-4xl xl:grid-cols-3 xl:max-w-none">
      {projects.map(({ node: { slug, thumbnail, logo, tags } }) => (
        <li tw="mb-5 w-full " key={slug}>
          <ProjectCard
            slug={slug}
            thumbnail={thumbnail}
            logo={logo}
            tags={tags}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
