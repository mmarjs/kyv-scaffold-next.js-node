import styled from "styled-components";

import { KYVLongLogoSVG } from "../assets/kyv-long-logo";
import { KYVLogoSVG } from "../assets/kyv-logo";

const LogoContainer = () => {

  return (
    <div>
      <LongLogo>
        <KYVLongLogoSVG />
      </LongLogo>
      <StackedLogo>
        <KYVLogoSVG />
      </StackedLogo>
    </div>
  );
};

export default LogoContainer;

const LongLogo = styled.div`
  display: block;

  @media (max-width: 1040px) {
    display: none;
  }

  svg {
    width: 100%;
    max-width: 1040px;
  }
`;

const StackedLogo = styled.div`
  display: none;

  @media (max-width: 1040px) {
    display: block;
  }

  svg {
    width: 100%;
    max-width: 230px;
  }
`;