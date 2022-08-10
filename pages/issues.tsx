import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import { KYVBgDotsSVG } from "../src/assets/kyv-bg-dots";
import IssuesList from "../src/components/IssuesList";
import HeaderContainer from "../src/components/HeaderContainer";
import MainContainer from "../src/components/Layout/MainContainer";
import HeroImage from "../src/components/HeroImage";
import LeftHeaderContainer from "../src/components/LeftHeaderContainer";

const IssuesPage = () => {
  return (
    <Main>
      <Head>
        <title>
          Know Your Vote 20222 - Toronto Election Education Platform by Toronto
          Public Library
        </title>
      </Head>
      <Header />

      <HeroImage />

      <MainContainer>
        <HeaderContainer>Big Issues</HeaderContainer>

        <LeftHeaderContainer title="About Issues">
              <p>
                On this page, you can explore the major issues relevant to
                municipal government in Toronto. When you click on any specific
                issues, you will be able to see some background info on the
                issue and the responses of candidates from your ward (and
                others) on the topic.
              </p>
        </LeftHeaderContainer>

        <IssuesList />
      </MainContainer>

      <Footer />
    </Main>
  );
};

export default IssuesPage;

const Main = styled.div`
`;
