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
import * as ga from "../lib/ga";

const IssuesPage = () => {
    useEffect(() => {
        ga.event({
            action: "All-Issues-Page-View",
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
                    content="https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/sharing-plaques%2FKYV_Social_Plaques_A2-Issues.png?alt=media&token=bac0d56f-e7d4-44cd-9131-f9e3535dcb9a"
                />

                <meta property="og:url" content="https://knowyourvote.to" />
                <meta property="og:site_name" content="Know Your Vote T.O. 2022" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Know Your Vote T.O. 2022" />
                <meta
                    property="og:image"
                    content="https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/sharing-plaques%2FKYV_Social_Plaques_A2-Issues.png?alt=media&token=bac0d56f-e7d4-44cd-9131-f9e3535dcb9a"
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
                    <>Big Issues</>
                </HeaderContainer>

                <LeftHeaderContainer title="The Big Issues of the 2022 Municipal Election">
                    <>
                        <p>
                            Every municipality, and therefore every municipal council, is faced with
                            'big issues' that stand out among others they most deliberate on and
                            address. Know Your Vote T.O. has created briefing notes for five of the
                            most significant issues that could be important during this municipal
                            election. Each is a concisely-written, balanced description of a problem
                            or topic supported by facts, figures, and source material.
                        </p>
                        <br />
                        <p>
                            Know Your Vote T.O. hopes these will contribute to your research that
                            will inform your vote or other ways you become engaged in this election.
                        </p>
                    </>
                </LeftHeaderContainer>

                <IssuesList />
            </MainContainer>

            <Footer />
        </Main>
    );
};

export default IssuesPage;

const Main = styled.div``;
