import React from "react";
import styled from "styled-components";

const MainContainer = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainContainer;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  position: relative;
  padding: 0 80px;

  @media (max-width: 1040px) {
    padding: 0 20px;
  }
`;
