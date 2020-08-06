import React from "react";
import "twin.macro";

import ContactForm from "./ContactForm";
import SocialButtonList from "./SocialButtonList";
import Container from "./common/Container";
import Title from "./common/Title";
import ButtonLink from "./common/ButtonLink";

const ContactSection = () => {
  return (
    <section tw="py-16 md:py-20 lg:py-32 bg-gray-200" id="contact">
      <Container tw="lg:flex justify-between">
        <div tw="mb-12 lg:mb-0 lg:w-full lg:max-w-xl">
          <Title tw="mb-8" variant="h2">
            Have a project in mind?
          </Title>
          <ContactForm />
        </div>
        <div tw="lg:text-right">
          <Title tw="mb-4" variant="h2">
            Find Me Here
          </Title>
          <address tw="not-italic mb-8 ">
            <ButtonLink href="mailto:dylanmooney62@gmail.com">
              dylanmooney62@gmail.com
            </ButtonLink>
          </address>
          <div tw="lg:ml-auto">
            <SocialButtonList />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
