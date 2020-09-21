import React from "react";
import { styled } from "twin.macro";

import Nav from "./Nav";
import Title from "./common/Title";
import Container from "./common/Container";
import Button from "./common/Button";

import heroImg from "../assets/images/hero.png";

const Hero = () => {
  return (
    <StyledHeader
      tw="relative z-10 xl:h-screen-90 xl:min-h-950"
      style={{ maxHeight: "850px" }}
    >
      <Nav />
      <Container tw="xl:flex flex-col justify-center h-full">
        <div tw="text-center py-32 sm:py-40 md:py-56 lg:text-left xl:p-0 xl:-mt-20">
          <Title tw="mb-3" variant="h1">
            Results Driven Websites
          </Title>
          <p
            tw="mx-auto text-xs leading-loose text-white font-body font-normal block max-w-2/3 mb-6 md:text-sm md:mb-8 lg:mr-auto lg:ml-0 lg:text-base"
            style={{ opacity: 0.95 }}
          >
            Expert front-end web development services based in Glasgow, Scotland
          </p>
          <div>
            <Button href="#projects" variant="secondary">
              View Projects
            </Button>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Hero;

// Styles
const StyledHeader = styled.header`

color: #009AED;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url('${heroImg}');
  background-color: #035581;
  background-blend-mode: multiply;
`;
