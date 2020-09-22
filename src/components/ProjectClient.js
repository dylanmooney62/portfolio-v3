import React from "react";
import "twin.macro";

import Title from "./common/Title";
import ButtonLink from "./common/ButtonLink";
import DefinitionList from "./common/DefinitionList";

const ProjectClient = ({ client, services, url, ...props }) => {
  return (
    <div {...props}>
      <Title variant="h3" as="h2" tw="mb-4 xl:text-2xl xl:mb-2">
        Client
      </Title>
      <DefinitionList>
        <div>
          <dt>Name:</dt>
          <dd>{client}</dd>
        </div>
        <div>
          <dt>Services:</dt>
          <dd>{services.join(",  ")}</dd>
        </div>
        <div>
          <dt>Website:</dt>
          <dd>
            <ButtonLink href={url} target="_blank" rel="noopener">
              {url}
            </ButtonLink>
          </dd>
        </div>
      </DefinitionList>
    </div>
  );
};

export default ProjectClient;
