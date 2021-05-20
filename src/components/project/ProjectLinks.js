import React from "react";
import PropTypes from "prop-types";
import "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faCode,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import Title from "../common/Title";
import Button from "../common/Button";

const ProjectLinks = ({ site, github, ...props }) => {
  return (
    <div {...props}>
      <Title variant="h3" as="h2" tw="mb-4 xl:text-2xl">
        View
      </Title>
      <div tw="flex">
        <Button
          variant="primary"
          small
          href={site}
          tw="mr-4"
          target="_blank"
          rel="noopener"
        >
          Live Site
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Button>
        {github ? (
          <Button
            variant="secondary"
            small
            href={github}
            target="_blank"
            rel="noopener"
          >
            Source Code
            <FontAwesomeIcon icon={faCode} />
          </Button>
        ) : (
          <Button variant="locked" small target="_blank">
            Source Code
            <FontAwesomeIcon icon={faEyeSlash} />
          </Button>
        )}
      </div>
    </div>
  );
};

ProjectLinks.propTypes = {
  site: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default ProjectLinks;
