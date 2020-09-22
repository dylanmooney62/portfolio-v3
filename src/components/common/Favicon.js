import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet";

const Favicon = () => {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    // hide window on gatsby build

    if (typeof window !== undefined) {
      window.matchMedia("(prefers-color-scheme:dark)").matches
        ? setIcon("dark")
        : setIcon("light");
    }
  }, [icon]);

  return (
    <Helmet>
      <link
        rel="shortcut icon"
        href={`/logo-${icon}.png`}
        type="image/x-icon"
      />
    </Helmet>
  );
};

export default Favicon;
