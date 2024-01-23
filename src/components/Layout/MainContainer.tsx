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
  position: relative;
  padding: 0 80px;
  max-width: 1344px;
  margin: 80px auto;

  @media (max-width: 1040px) {
    padding: 0 20px;
  }
`;
