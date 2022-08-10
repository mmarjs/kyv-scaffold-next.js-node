import React from "react";

import styled from "styled-components";

const HeroImage = () => {
  return <Hero></Hero>;
};

export default HeroImage;

const Hero = styled.div`
  position: absolute;
  top: 70px;
  left: 0px;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-image: url(${"/images/kyv-dots-bg.png"});
  background-repeat-x: repeat;
  background-repeat-y: no-repeat;
  overflow: hidden;
  background-position: top center;

  @media (max-width: 1040px) {
    background-size: 25%;
  }
`;
