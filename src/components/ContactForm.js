import React, { useState } from "react";
import "twin.macro";

import Button from "./common/Button";
import Input from "./common/Input";
import Label from "./common/Label";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form tw="w-full font-body" onSubmit={() => console.log("submit")}>
      <div tw="mb-5">
        <Label htmlFor="name" text="Name">
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Label>
      </div>
      <div tw="mb-5">
        <Label htmlFor="email" text="Email">
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
      </div>
      <div tw="mb-8">
        <Label htmlFor="description" text="Project Description">
          <Input
            tw="h-40"
            as="textarea"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Label>
      </div>
      <Button as="button" type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
