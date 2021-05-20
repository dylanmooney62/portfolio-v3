import React from "react";
import PropTypes from "prop-types";
import "twin.macro";

import Title from "../common/Title";

const ProjectTechnology = ({ technologies, ...props }) => {
  return (
    <div {...props}>
      <Title variant="h3" as="h2" tw="mb-4 xl:text-2xl xl:mb-4">
        Tools & Technologies
      </Title>
      <ul tw="flex flex-wrap -mt-4 xl:max-w-xs">
        {technologies.map((tech) => (
          <li
            key={tech}
            tw="text-xs font-bold uppercase text-gray-700 bg-gray-300 font-semibold py-2 px-4 not-last:mr-4 mt-4 rounded-sm"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProjectTechnology.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectTechnology;
