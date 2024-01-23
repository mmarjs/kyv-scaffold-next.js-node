import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import WardMap from "../src/components/WardMap";
import Footer from "../src/components/Footer";
import ThemeContainer from "../src/components/ThemeContainer";
import LeftHeaderContainer from "../src/components/LeftHeaderContainer";
import MainContainer from "../src/components/Layout/MainContainer";
import LogoContainer from "../src/components/LogoContainer";
import EventBlock from "../src/components/EventBlock";
import CandidateBlock from "../src/components/CandidateBlock";
import WardSubscription from "../src/components/WardSubscription";
import FloatingShareButton from "../src/components/FloatingShareButton";

import Link from "next/link";

import HeroImage from "../src/components/HeroImage";
import IssuesList from "../src/components/IssuesList";
import Header from "../src/components/Header";
import SiteDepartureModal from "../src/components/SiteDepartureModal";
import * as ga from "../lib/ga";

const HomePage = () => {
    // Modal stuff
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [href, setHref] = useState<string>("");

    const handleLinkClick = (e) => {
        e.preventDefault();
        setModalOpen(true);
        setHref(e.target.href);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        ga.event({
            action: "Home-Page-View",
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
                <LogoContainer />
                {/* <p>Find your ward and view your candidates (and their platforms) for the <b>2022 Toronto Municipal Election on October 24th</b>.</p> */}

                <LeftHeaderContainer
                    title={
                        "Learn what the candidates running in your ward think about Toronto's biggest issues"
                    }
                >
                    <>
                        {/* <h2>Learn about what the Canadidates running in your ward thing about Toronto's biggest issues.</h2> */}
                        <p>
                            Know Your Vote T.O. is a municipal election candidate civic learning
                            website developed by the Toronto Public Library. This website is not
                            affiliated with the City of Toronto's Election Services.
                        </p>
                        <br />
                        <p>
                            To find out who is running, enter your address in the box below. If you
                            don't want to enter your address, click on your part of the city using
                            the map. On a mobile device? Tap within the ward's boundaries twice.
                        </p>
                        <br />
                        <p>
                            Click <Link href="/candidates/toronto-mayor">here</Link> to find out who
                            is running for Mayor.
                        </p>
                    </>
                </LeftHeaderContainer>

                <ThemeContainer
                    id="home-browse-wards"
                    title="Browse Wards"
                    actionLink="/candidates/toronto-mayor"
                    actionTitle="See Mayoral Candidates"
                >
                    <WardMap />
                </ThemeContainer>
                <WardSubscription>
                    <></>
                </WardSubscription>

                <IssuesList />

                <LeftHeaderContainer title="Election Information">
                    <>
                        <p>Election day for Toronto is Monday, October 24, 2022.</p>
                        <br />
                        <p>
                            The City of Toronto's Election Services{" "}
                            <a
                                href="https://www.toronto.ca/city-government/elections"
                                rel="noopener noreferrer"
                                onClick={handleLinkClick}
                                title="Elections – City of Toronto"
                            >
                                website
                            </a>{" "}
                            is the best place to find information about how to vote, election dates,
                            and other information.
                        </p>
                        <br />
                        <p>
                            More than 15,000 people are needed to help deliver the largest municipal
                            election in Canada — to learn more and apply, go to the City of
                            Toronto's{" "}
                            <a
                                href="https://www.toronto.ca/city-government/elections/about-election-jobs/"
                                title="About Election Jobs – City of Toronto"
                                onClick={handleLinkClick}
                            >
                                website.
                            </a>
                        </p>
                        <br />
                        <p>
                            <a
                                href="https://www.knowyourvote.to/how-to-vote"
                                onClick={handleLinkClick}
                                title="About Election Jobs – City of Toronto"
                            >
                                Here is a quick reference.
                            </a>
                        </p>
                    </>
                </LeftHeaderContainer>
                <ThemeContainer title="Mayoral Candidates">
                    <CandidateBlock ward="toronto-mayor" />
                </ThemeContainer>
                {/* <EventBlock /> */}
            </MainContainer>
            <Footer />
            <FloatingShareButton pageName={"this site"} />
            {isModalOpen && <SiteDepartureModal href={href} handleClose={handleModalClose} />}
        </Main>
    );
};

export default HomePage;

const Main = styled.div``;
