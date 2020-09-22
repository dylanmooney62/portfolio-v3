import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet";

const Favicon = () => {
  return (
    <Helmet>
      <link
        rel="shortcut icon"
        href={
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? `/logo-dark.png`
            : "/logo-light.png"
        }
        type="image/x-icon"
      />
    </Helmet>
  );
};

export default Favicon;
