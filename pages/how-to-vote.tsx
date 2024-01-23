import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import LeftHeaderContainer from "../src/components/LeftHeaderContainer";
import HeaderContainer from "../src/components/HeaderContainer";
import MainContainer from "../src/components/Layout/MainContainer";
import HeroImage from "../src/components/HeroImage";
import * as ga from "../lib/ga";

import { KYVBgDotsSVG } from "../src/assets/kyv-bg-dots";

const HowToVotePage = () => {
    useEffect(() => {
        ga.event({
            action: "How-to-Vote-Page-View",
            params: {},
        });
    });

    return (
        <Main>
            <Head>
                <title>
                    Know Your Vote T.O. 2022 - Toronto Election Education Platform by the Toronto
                    Public Library
                </title>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Know Your Vote T.O. 2022" />
                <meta
                    name="twitter:description"
                    content="Toronto Election Education Platform by the Toronto Public Library"
                />
                <meta
                    name="twitter:image"
                    content="https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/sharing-plaques%2FKYV_Social_Plaque_Gen.png?alt=media&token=28770008-d546-42d0-bf94-456670a70a3c"
                />

                <meta property="og:url" content="https://knowyourvote.to" />
                <meta property="og:site_name" content="Know Your Vote T.O. 2022" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Know Your Vote T.O. 2022" />
                <meta
                    property="og:image"
                    content="https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/sharing-plaques%2FKYV_Social_Plaque_Gen.png?alt=media&token=28770008-d546-42d0-bf94-456670a70a3c"
                />
                <meta
                    property="og:description"
                    content="Toronto Election Education Platform by the Toronto Public Library"
                />
            </Head>
            <Header />

            <HeroImage />

            <MainContainer>
                <HeaderContainer>
                    <>Election Information</>
                </HeaderContainer>

                <LeftHeaderContainer title="Quick Reference for the 2022 Toronto Municipal Election">
                    <Container>
                        <p>Election day for Toronto is Monday, October 24, 2022.</p>
                        <br />
                        <p>
                            <b>
                                The City of Toronto's Election Services{" "}
                                <a
                                    href="https://www.toronto.ca/city-government/elections/"
                                    target="_blank"
                                >
                                    website
                                </a>{" "}
                                is the <span>best</span> place to find information about how to
                                vote, election dates, and other information.
                            </b>
                        </p>
                        <br />
                        <p>Visit the City's Election Services website for information about:</p>
                        <ul>
                            <li>Who can vote and what you need to bring to your voting place;</li>
                            <li>Advance voting dates;</li>
                            <li>
                                Additional voting options and accommodations, including what to do
                                if you need time off work to vote;
                            </li>
                            <li>How to apply for one of the 15,000 election day jobs;</li>
                            <li>And lots of other information</li>
                        </ul>
                        <p>Still got a question? Call 311!</p>
                        <br />
                        <p>
                            311 is a City of Toronto service available 24/7 to help you get
                            information and figure out all sorts of issues — including voting.
                        </p>

                        {/* You can view election results on the{" "}
            <a href="https://electionresults.toronto.ca/" target="_blank">
              City of Toronto's website.
            </a>
            <br />
            <br />
            Visit{" "}
            <a
              href="https://www.toronto.ca/city-government/elections/"
              target="_blank"
            >
              the City's Election Services website
            </a>{" "}
            for information about:
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
            You can also use the City of Toronto's{" "}
            <a href="https://myvote.toronto.ca/home" target="_blank">
              MyVote website
            </a>{" "}
            to find out:
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
            Still got a question?{" "}
            <a
              href="https://www.toronto.ca/home/311-toronto-at-your-service/"
              target="_blank"
            >
              Call 311
            </a>
            !
            <br />
            <br />
            311 is a City of Toronto service available 24/7 to help you get
            information and figure out all sorts of issues — including voting.
            <br />
            <br />
            Got a question? Go ahead and give them a call - just dial 311. */}
                    </Container>
                </LeftHeaderContainer>
            </MainContainer>
            <Footer />
        </Main>
    );
};

export default HowToVotePage;

const Main = styled.div``;

const Container = styled.div`
    ul {
        margin: 20px 0px 20px 20px;
    }

    li {
        list-style: initial;
        margin: 5px 0;
        font-size: 18px;
    }
`;
