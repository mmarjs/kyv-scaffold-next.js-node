import styled from "styled-components";
import Image from "next/image";

import { KYVLongLogoSVG } from "../assets/kyv-long-logo";
import { KYVLogoSVG } from "../assets/kyv-logo";

const LogoContainer = () => {

  return (
    <Container>
      <LongLogo>
        <KYVLongLogoSVG />
      </LongLogo>
      <StackedLogo>
        <KYVLogoSVG />
      </StackedLogo>
      <TPLLogo className="tpl-project">
            <span>A project by</span>
            <Image src="/images/tpl-logo.png" width="130" height="45"></Image>
          </TPLLogo>
    </Container>
  );
};

export default LogoContainer;

const TPLLogo = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: end;
  margin-top: 20px;
  margin-bottom: -40px;

  span {
    margin-top: 10px;
    padding-right: 2px;
  }
`;

const Container = styled.div`
display: inline-block;
background-color: white;
border: 2px solid #393535;
border-radius: 0px 20px 20px 20px;
max-width: 1344px;
box-shadow: 8px 8px #393535;
margin-top: 85px;
overflow: hidden;
padding: 50px 35px;
margin-bottom: 30px;
font-size: 60px;
font-weight: 800;
text-transform: capitalize;
width: 80%;

@media (max-width: 1040px) {
  border-radius: 0px 10px 10px 10px;
  margin-top: 50px;
  box-shadow: 5px 5px #393535;
  max-width: 360px;
  width: 100%;
}
`

const LongLogo = styled.div`
  display: block;
  width: 100%;

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
    max-width: 280px;
  }
`;