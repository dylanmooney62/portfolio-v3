import React from "react";
import "twin.macro";

import Title from "./common/Title";
import ButtonLink from "./common/ButtonLink";
import DefinitionList from "./common/DefinitionList";

const ProjectClient = ({ client, ...props }) => {
  return (
    <div {...props}>
      <Title variant="h3" as="h3" tw="mb-4 xl:text-2xl xl:mb-2">
        Client
      </Title>
      <DefinitionList>
        <div>
          <dt>Name:</dt>
          <dd>{client.name}</dd>
        </div>
        <div>
          <dt>Services:</dt>
          <dd>{client.services.join(", ")}</dd>
        </div>
        <div>
          <dt>Website:</dt>
          <dd>
            <ButtonLink href={client.site} target="_blank" rel="noopener">
              {client.site}
            </ButtonLink>
          </dd>
        </div>
      </DefinitionList>
    </div>
  );
};

export default ProjectClient;
