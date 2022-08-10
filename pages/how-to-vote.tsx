import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import LeftHeaderContainer from "../src/components/LeftHeaderContainer";
import HeaderContainer from "../src/components/HeaderContainer";
import MainContainer from "../src/components/Layout/MainContainer";
import HeroImage from "../src/components/HeroImage";

import { KYVBgDotsSVG } from "../src/assets/kyv-bg-dots";

const HowToVotePage = () => {
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
        <HeaderContainer>How To Vote</HeaderContainer>

        <LeftHeaderContainer title="Got questions about voting in our next election?">
          <Container>
            You can view election results on the <a href="https://electionresults.toronto.ca/">City of Toronto's website.</a>
            <br />
            <br />
            Visit <a href="https://www.toronto.ca/city-government/elections/">the City's Election Services website</a> for information about:
            <ul>
              <li>
                Who can vote and what you need to bring to your voting place
              </li>
              <li>Days you can vote in advance of October 22</li>
              <li>
                Additional voting options and accommodations, including what to
                do if you need time off work to vote
              </li>
              <li>How to apply for one of the 15,000 election day jobs</li>
              <li>And lots of other information</li>
            </ul>
            You can also use the City of Toronto's <a href="https://myvote.toronto.ca/home">MyVote website</a> to find out:
            <ul>
              <li>
                Whether you're on the voter's list and how to add or update your
                information (until October 1)
              </li>
              <li>
                Where and when you can vote, as well as accessibility
                information about your voting place
              </li>
              <li>A sample of your ballot (starting October 8)</li>
              <li>Candidates running in your ward</li>
            </ul>
            Still got a question? <a href="https://www.toronto.ca/home/311-toronto-at-your-service/">Call 311</a>!
            <br />
            <br />
            311 is a City of Toronto service available 24/7 to help you get
            information and figure out all sorts of issues — including voting.
            <br />
            <br />
            Got a question? Go ahead and give them a call - just dial 311.
          </Container>
        </LeftHeaderContainer>
      </MainContainer>
      <Footer />
    </Main>
  );
};

export default HowToVotePage;

const Main = styled.div``;

const Container = styled.p`
  ul {
    margin: 20px 0px 20px 20px;
  }

  li {
    list-style: initial;
    margin: 5px 0;
    font-size: 18px;
  }
`;
