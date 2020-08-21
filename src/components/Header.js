import React from "react";
import "twin.macro";

import Title from "./common/Title";
import Container from "./common/Container";
import Caption from "./common/Caption";

const Header = ({ title, caption }) => {
  return (
    <header tw="container mx-auto pt-32 pb-16 md:pt-40 md:pb-24 xl:pt-56 xl:pb-32">
      <Container>
        <Caption tw="mb-4">{caption}</Caption>
        <Title variant="h2" as="h1">
          {title}
        </Title>
      </Container>
    </header>
  );
};

export default Header;
