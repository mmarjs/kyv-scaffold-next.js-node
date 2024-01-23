import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import LeftHeaderContainer from "../src/components/LeftHeaderContainer";
import HeaderContainer from "../src/components/HeaderContainer";
import MainContainer from "../src/components/Layout/MainContainer";
import HeroImage from "../src/components/HeroImage";
import SiteDepartureModal from "../src/components/SiteDepartureModal";
import FloatingShareButton from "../src/components/FloatingShareButton";
import * as ga from "../lib/ga";

const HowToVotePage = () => {
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
            action: "About-Mayor-And-Council-Page-View",
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
                    <>About the Mayor of Toronto and Toronto City Councillors</>
                </HeaderContainer>

                <LeftHeaderContainer title="">
                    <>
                        <Container>
                            <h1>
                                Understanding the Role of the Mayor of Toronto and Toronto City
                                Councillors
                            </h1>
                            <br />
                            <p>
                                The City of Toronto is the responsibility of the Toronto City
                                Council. The City Council is made up of 26 members, including the
                                Mayor (
                                <a
                                    target="_blank"
                                    href="https://www.toronto.ca/wp-content/uploads/2017/12/94af-roles-of-the-mayor-city-council-learning-guide-brochure.pdf"
                                >
                                    Go to information source
                                </a>
                                ).
                            </p>
                            <br />
                            <p>
                                Of the 26 members, 25 are elected by voters in their ward, a
                                geographically defined voting district in the city. The Mayor is the
                                only member elected by all Toronto voters.
                            </p>
                            <br />
                        </Container>

                        <Row>
                            <FactCircle>
                                <p>Council members serve a 4-year term.</p>
                            </FactCircle>
                            <Container>
                                <h2>The Role of City Councillors is to:</h2>
                                <ul>
                                    <li>Represent the public;</li>
                                    <li>Consider the well-being of the City;</li>
                                    <li>Develop and evaluate City policies and programs;</li>
                                    <li>Decide what services the City provides;</li>
                                    <li>
                                        Uphold accountability and transparency of how the City
                                        operates;
                                    </li>
                                    <li>Maintain the financial integrity of the City.</li>
                                </ul>
                            </Container>
                        </Row>

                        <Container>
                            <p>
                                This includes indirectly overseeing major City services provided by
                                the Toronto Transit Commission, the Toronto Police Service and the
                                Toronto Public Library.
                            </p>
                            <br />
                            <h2>The Role of the Mayor of Toronto</h2>
                            <p>
                                The Mayor is the head of the Toronto City Council and the Chief
                                Executive Officer. They have several responsibilities in both roles
                                including:
                            </p>
                            <br />
                            <ul>
                                <li>
                                    Acting as the representative of and promoting the City of
                                    Toronto locally, nationally, and internationally;
                                </li>
                                <li>
                                    Providing information and making recommendations to Council to
                                    ensure that administrative and controllership policies,
                                    practices, and procedures are in place to implement the
                                    decisions of Council.
                                </li>
                            </ul>
                            <br />
                            <h1>Understanding the Proposed Strong Mayor Powers</h1>
                            <br />
                            <p>
                                Early in the summer the Premier of Ontario, the Honourable Doug
                                Ford, proposed the expansion of Strong Mayor Powers to
                                municipalities across the province (
                                <a href="https://www.cbc.ca/news/canada/toronto/strong-mayors-expanded-more-cities-1.6551789">
                                    Go to information source
                                </a>
                                ). This legislation was passed on September 8th (
                                <a href="https://www.cbc.ca/news/canada/toronto/ontario-strong-mayor-1.6576122">
                                    Go to information source
                                </a>
                                ).
                            </p>
                            <br />
                            <h2>Why the Change in Legislation?</h2>
                            <br />
                            <p>
                                The Premier of Ontario, the Honourable Doug Ford, proposed Strong
                                Mayor Powers as a way to help support provincial priorities
                                including the building of 1.5 million homes in the next ten years,
                                and the construction and maintenance of infrastructure.
                            </p>
                            <br />
                            <h2>What are Strong Mayor Powers?</h2>
                            <br />
                            <p>
                                As mentioned, the Toronto City Council is made up of 26 members,
                                including the Mayor. While the Mayor is the representative of the
                                City, they only have one vote on the City Council.
                            </p>
                            <br />
                            <p>
                                The legislation gives the Mayor the responsibility for preparing and
                                tabling the City budget. This is different from the current process
                                where the Council has the responsibility.
                            </p>
                            <br />
                            <p>
                                The Mayor will also appoint a chief administrative officer and hire
                                and fire department heads except for statutory appointments like the
                                auditor general and police and fire chiefs. This legislation will
                                also grant the Mayor the power to override Council approval of a
                                bylaw.
                            </p>
                            <br />
                            <p>
                                Strong Mayor Powers isn&#39;t new, it is used in many countries,
                                including some cities in the United States.
                            </p>
                            <br />
                            <p>
                                The legislation also gives the Mayor the ability to veto Council
                                approval of a bylaw. However, the Council can override the veto with
                                a two-thirds majority vote. The Mayor will continue to have one vote
                                on Council decisions.
                            </p>
                            <br />
                            <hr />
                            <br />
                            {/* <Source>
                <sup>[1]</sup>{" "}
                <a onClick={handleLinkClick} href={"https://www.toronto.ca/wp-content/uploads/2017/12/94af-roles-of-the-mayor-city-council-learning-guide-brochure.pdf"} target="_blank">https://www.toronto.ca/wp-content/uploads/2017/12/94af-roles-of-the-mayor-city-council-learning-guide-brochure.pdf</a>
                
              </Source>
              <Source>
                <sup>[2]</sup>{" "}
                <a onClick={handleLinkClick} href={"https://www.cbc.ca/news/canada/toronto/strong-mayors-expanded-more-cities-1.6551789"} target="_blank">https://www.cbc.ca/news/canada/toronto/strong-mayors-expanded-more-cities-1.6551789</a>
              </Source>
              <Source>
                <sup>[3]</sup>{" "}
                <a onClick={handleLinkClick} href={"https://news.ontario.ca/en/backgrounder/1002234/strong-mayors-building-homes-act"} target="_blank">https://news.ontario.ca/en/backgrounder/1002234/strong-mayors-building-homes-act</a>
              </Source> */}
                        </Container>
                    </>
                </LeftHeaderContainer>
            </MainContainer>
            <Footer />
            <FloatingShareButton pageName={"this site"} />
            {isModalOpen && <SiteDepartureModal href={href} handleClose={handleModalClose} />}
        </Main>
    );
};

export default HowToVotePage;

const Main = styled.div``;

const Container = styled.div`
    h1 {
        font-size: 28px;
    }

    ul {
        margin: 20px 0px 20px 20px;
    }

    li {
        list-style: initial;
        margin: 5px 0;
        font-size: 18px;
    }
`;

const Row = styled.div`
    display: flex;
`;

const FactCircle = styled.div`
    background-color: #e99450;
    width: 200px;
    height: 200px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    margin-top: 10px;
    border-radius: 180px;

    p {
        text-align: center;
        /* padding: 10px; */
        font-size: 18px;
        font-weight: 500;
    }
`;

const Source = styled.p`
    font-size: 14px;
    margin-bottom: 15px;
    margin-left: 10px;

    sup {
        vertical-align: super;
        font-size: 10px;
        margin-right: 6px;
    }
`;
