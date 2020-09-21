import React from "react";
import PropTypes from "prop-types";
import "twin.macro";

import Title from "./common/Title";
import Paragraph from "./common/Paragraph";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ProjectCaseStudy = ({
  caseStudy: { challenge, solution, features },
  ...props
}) => {
  return (
    <div tw="lg:max-w-2xl xl:max-w-3xl" {...props}>
      <div tw="mb-10 ">
        <Title variant="h3" as="h2" tw="mb-4">
          Overview
        </Title>
        {challenge.split(/\n/).map((text, index) => (
          <Paragraph key={index} tw="leading-loose mb-4">
            {text}
          </Paragraph>
        ))}
      </div>
      <div tw="mb-10">
        <Title variant="h3" as="h2" tw="mb-4">
          Solution
        </Title>
        {solution.split(/\n/).map((text, index) => (
          <Paragraph key={index} tw="leading-loose mb-4">
            {text}
          </Paragraph>
        ))}
      </div>
      <div>
        <Title variant="h3" as="h2" tw="mb-4">
          Features
        </Title>
        <ul tw="text-gray-800 text-base">
          {features.map((text, index) => (
            <li tw="mb-3" key={index}>
              <FontAwesomeIcon tw="mr-4 text-blue-800" icon={faCheck} />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProjectCaseStudy.propTypes = {
  caseStudy: PropTypes.string.isRequired,
};

export default ProjectCaseStudy;
