import React, { useState } from "react";
import axios from "axios";
import { styled } from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "./common/Button";
import Input from "./common/Input";
import Label from "./common/Label";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !description) {
      return toast.error("Please enter all form fields correctly.");
    }

    setIsSending(true);

    try {
      await axios({
        method: "post",
        url: "https://getform.io/f/38b2d39b-1a99-4fd5-a03a-6fdf87ad1c0e",
        data: new FormData(e.target),
      });

      handleResponse(
        true,
        "Email Successful - Thank you for getting in touch."
      );
    } catch (res) {
      handleResponse(false, "Something went wrong - Please try again later.");
    }
  };

  const handleResponse = (success, msg) => {
    setIsSending(false);

    if (!success) {
      return toast.error(msg);
    }

    setName("");
    setEmail("");
    setDescription("");
    toast.success(msg);
  };

  return (
    <form tw="w-full font-body" onSubmit={handleSubmit}>
      <div tw="mb-5">
        <Label htmlFor="name" text="Name">
          <Input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autocomplete="name"
          />
        </Label>
      </div>
      <div tw="mb-5">
        <Label htmlFor="email" text="Email">
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autocomplete="email"
          />
        </Label>
      </div>
      <div tw="mb-8">
        <Label htmlFor="description" text="Message">
          <Input
            tw="h-40"
            as="textarea"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Label>
      </div>
      <SendButton
        as="button"
        type="submit"
        variant="primary"
        disabled={isSending}
      >
        {!isSending ? (
          <>
            Send Message
            <FontAwesomeIcon icon={faPaperPlane} tw="mx-auto" />
          </>
        ) : (
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            tw="mx-auto"
            className="spinner"
          />
        )}
      </SendButton>
    </form>
  );
};

const SendButton = styled(Button)`
  text-align: center;
  min-width: 156px;
  min-height: 42px;

  @media (min-width: 768px) {
    min-width: 184px;
    min-height: 53px;
  }

  .spinner {
    margin: auto !important;
  }
`;

export default ContactForm;
