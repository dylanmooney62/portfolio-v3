import React from "react";
import PropTypes from "prop-types";
import "twin.macro";

import Title from "./common/Title";
import Button from "./common/Button";

const ProjectLinks = ({ site, github, ...props }) => {
  return (
    <div {...props}>
      <Title variant="h3" as="h3" tw="mb-4 xl:text-2xl">
        View
      </Title>
      <div tw="flex">
        <Button variant="primary" small href={site} tw="mr-4">
          Live Site
        </Button>
        <Button variant="secondary" small href={github}>
          Source Code
        </Button>
      </div>
    </div>
  );
};

ProjectLinks.propTypes = {
  site: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default ProjectLinks;
