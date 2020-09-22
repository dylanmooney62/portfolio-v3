import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

import Footer from "./Footer";
import Favicon from "./common/Favicon";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Favicon />
      {children}
      <Footer />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

// Styles

const StyledLayout = styled.div`
  ${tw`font-body antialiased`}
`;
