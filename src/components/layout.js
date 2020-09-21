import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
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
