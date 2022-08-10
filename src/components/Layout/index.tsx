import React from "react";
import Header from "../Header";
import { LayoutContainer } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <LayoutContainer>
      {/* <Header /> */}
      {children}
    </LayoutContainer>
  );
};

export default Layout;
