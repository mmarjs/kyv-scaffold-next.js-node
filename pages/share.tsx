import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import HeaderContainer from "../src/components/HeaderContainer";
import MainContainer from "../src/components/Layout/MainContainer";
import HeroImage from "../src/components/HeroImage";
import ThemeContainer from "../src/components/ThemeContainer";
import SiteDepartureModal from "../src/components/SiteDepartureModal";

const SharePage = () => {
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
                    <>Help Spread the Word</>
                </HeaderContainer>

                <ThemeContainer>
                    <Container>
                        <h3 id="toc_0">Know Your Vote T.O.</h3>

                        <h2 id="toc_1">
                            Help the Toronto Public Library spread the word about this project and
                            get more people talking about and participating in this election
                        </h2>

                        <Row>
                            <Col>
                                <p>
                                    Check out and share the{" "}
                                    <a
                                        href="https://www.thestar.com/opinion/contributors/2022/09/29/libraries-play-in-important-role-in-promoting-democracy.html"
                                        target="_blank"
                                    >
                                        Toronto Star op-ed
                                    </a>{" "}
                                    from Vickery Bowles, the City Librarian at the Toronto Public
                                    Library.
                                </p>
                                <a
                                    href="https://www.thestar.com/opinion/contributors/2022/09/29/libraries-play-in-important-role-in-promoting-democracy.html"
                                    target="_blank"
                                >
                                    <StarArticle
                                        src={
                                            "https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/website-assets%2Fthestar.png?alt=media&token=9e2e457c-3491-41a0-ac0c-dec443f56f8d"
                                        }
                                        alt="Article about Know Your Vote in the Toronto Start, September 29, 2022."
                                    />
                                </a>
                            </Col>

                            <Col>
                                <p>
                                    Check out and share this hit on{" "}
                                    <a
                                        href="https://www.cbc.ca/news/canada/toronto/toronto-municipal-election-site-1.6600885?__vfz=medium%3Dsharebar"
                                        target="_blank"
                                    >
                                        CBC's home page
                                    </a>
                                    .
                                </p>
                                <a
                                    href="https://www.cbc.ca/news/canada/toronto/toronto-municipal-election-site-1.6600885?__vfz=medium%3Dsharebar"
                                    target="_blank"
                                >
                                    <StarArticle
                                        src={
                                            "https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/website-assets%2Fcbc-article.png?alt=media&token=39b6b5fa-9e70-45f2-a3cf-e300634486ea"
                                        }
                                        alt="Article about Know Your Vote on the CBC website."
                                    />
                                </a>
                            </Col>

                            <Col>
                                <p>
                                    And browse and share this article on{" "}
                                    <a
                                        href="https://www.toronto.com/news/toronto-library-launch-website-hosting-events-ahead-of-municipal-election/article_cecf9eda-1049-5d05-8d38-adbba34187f6.html"
                                        target="_blank"
                                    >
                                        Toronto.com
                                    </a>
                                    .
                                </p>
                                <a
                                    href="https://www.toronto.com/news/toronto-library-launch-website-hosting-events-ahead-of-municipal-election/article_cecf9eda-1049-5d05-8d38-adbba34187f6.html"
                                    target="_blank"
                                >
                                    <StarArticle
                                        src={
                                            "https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/website-assets%2Ftoronto.com-article.png?alt=media&token=feda9c87-5a80-4d67-9346-bfd7a619993f"
                                        }
                                        alt="Article about Know Your Vote on Toronto.com."
                                    />
                                </a>
                            </Col>
                        </Row>

                        <p>
                            <br />
                        </p>

                        <p>
                            <strong>
                                Use these materials to spread the word to members of your
                                organization, community, or club.
                            </strong>
                        </p>

                        <p>
                            If you have questions about the project, please contact:{" "}
                            <a href="mailto:info@knowyourvote.to">info@knowyourvote.to</a>
                        </p>

                        <p>
                            If you have a media request for the Toronto Public Library, please
                            contact <a href="mailto:media@tpl.ca">media@tpl.ca</a>
                        </p>

                        <p>
                            <br />
                            <strong>
                                Want to help and spread the word? Use some of the sample promotional
                                text or images below.
                            </strong>{" "}
                            Condo board newsletter - Neighbourhood Facebook group - Parent council
                            email list for your child’s school - Your organization&#39;s monthly
                            e-newsletter or social media posts - Reddit discussions - Print out a
                            PDF to hand out to your neighbours - Post to Slack or Teams at work -{" "}
                            <em>and more</em>.
                        </p>

                        <p>
                            <br />
                        </p>

                        <h3 id="toc_2">via Newsletter</h3>

                        <h4 id="toc_3">Short</h4>

                        <blockquote>
                            <p>
                                The Toronto Public Library has launched a special 2022 municipal
                                election website called{" "}
                                <a href="https://knowyourvote.to">knowyourvote.to</a>. All 195
                                candidates running for municipal council and mayor were asked five
                                questions about their vision for housing, policing and community
                                safety, taxes and spending, climate action, and getting around the
                                city. Learn about what the councillor from your ward and Toronto’s
                                mayoral candidates have to say about the city’s big issues — go to{" "}
                                <a href="https://knowyourvote.to">knowyourvote.to</a>
                            </p>
                        </blockquote>

                        <p>
                            <br />
                        </p>

                        <h4 id="toc_4">Medium</h4>

                        <blockquote>
                            <p>
                                The Toronto Public Library has launched a special 2022 municipal
                                election website called{" "}
                                <a href="https://knowyourvote.to">knowyourvote.to</a>. All 195
                                candidates running for municipal council and mayor were asked five
                                questions about their vision for housing, policing and community
                                safety, taxes and spending, climate action, and getting around the
                                city. In conjunction with Know Your Vote, TPL is launching{" "}
                                <a href="https://tpl.ca/Celebrate-Democracy.">
                                    Celebrate Democracy
                                </a>
                                , a suite of free online and in-person programming and activations
                                that encourage engagement and curiosity in voting, democracy, and
                                the electoral process. This project aims to support
                                Torontonians&#39; participation in this election and conversations
                                about our democracy and civic life. Learn about what the councillor
                                from your ward and Toronto’s mayoral candidates have to say about
                                the city’s big issues — go to{" "}
                                <a href="https://knowyourvote.to">knowyourvote.to</a>
                            </p>
                        </blockquote>

                        <p>
                            <br />
                        </p>

                        <h4 id="toc_5">Long</h4>

                        <blockquote>
                            <p>
                                The Toronto Public Library has launched a special 2022 municipal
                                election website called{" "}
                                <a href="https://knowyourvote.to">knowyourvote.to</a>. All 195
                                candidates running for municipal council and mayor were asked five
                                questions about their vision for housing, policing and community
                                safety, taxes and spending, climate action, and getting around the
                                city. Learn about what the councillor from your ward and Toronto’s
                                mayoral candidates have to say about the city’s big issues — go to{" "}
                                <a href="https://knowyourvote.to">knowyourvote.to</a>.{" "}
                            </p>

                            <p>
                                This project aims to support Torontonians&#39; participation in this
                                election and conversations about our democracy and civic life.
                                Further supporting this goal, TPL is launching Celebrate Democracy,
                                a suite of free online and in-person programming and activations
                                with a dedicated Reading List, in-branch Vote Pop-Ups, and a special
                                children’s election for a fictional mayor. Check it all out by
                                visiting{" "}
                                <a href="https://tpl.ca/celebrate-democracy">
                                    TPL.ca/Celebrate-Democracy
                                </a>
                                .
                            </p>
                        </blockquote>

                        <p>
                            <br />
                        </p>

                        <h3 id="toc_6">via Online groups, such as a Facebook group</h3>

                        <blockquote>
                            <p>
                                The Toronto Public Library has launched a special 2022 municipal
                                election website called{" "}
                                <a href="https://knowyourvote.to">knowyourvote.to</a>. All 195
                                candidates running for municipal council and mayor were asked five
                                questions about their vision for housing, policing and community
                                safety, taxes and spending, climate action, and getting around the
                                city. Learn about what the councillor from your ward and Toronto’s
                                mayoral candidates have to say about the city’s big issues — go to{" "}
                                <a href="https://knowyourvote.to">knowyourvote.to</a>
                            </p>
                        </blockquote>

                        <p>
                            <br />
                        </p>

                        <h3 id="toc_7">via Social Media Post</h3>

                        <blockquote>
                            <p>
                                The @torontolibrary has launched a special 2022 municipal election
                                website called <a href="https://knowyourvote.to">knowyourvote.to</a>{" "}
                                — check out what the candidates in your ward think about the biggest
                                issues in #Toronto #TOpoli #TOElection #ElectionTO2022
                            </p>
                        </blockquote>

                        <p>
                            <br />
                        </p>

                        <blockquote>
                            <p>
                                The @torontolibrary has launched a special 2022 municipal election
                                website called knowyourvote.to — learn about the biggest issues in
                                #Toronto and what candidates think about them #TOpoli #TOElection
                                #ElectionTO2022
                            </p>
                        </blockquote>

                        <p>
                            <br />
                        </p>

                        <blockquote>
                            <p>
                                The @torontolibrary has launched a special 2022 municipal election
                                website called <a href="knowyourvote.to">knowyourvote.to</a> — find
                                out who is running as a candidate in your ward and what they think
                                about Toronto&#39;s biggest issues #TOpoli #TOElection
                                #ElectionTO2022 #Toronto
                            </p>
                        </blockquote>

                        <p>
                            <br />
                        </p>

                        <blockquote>
                            <p>
                                Election day for Toronto is around the corner - October 24. Learn
                                what the candidates running in your ward think about Toronto&#39;s
                                biggest issues <a href="knowyourvote.to">knowyourvote.to</a>{" "}
                                knowyourvote.to #TOpoli #TOElection #ElectionTO2022 #Toronto
                            </p>
                        </blockquote>

                        <p>
                            <br />
                        </p>

                        <blockquote>
                            <p>
                                In the run up to the municipal election,{" "}
                                <a href="https://www.torontopubliclibrary.ca/programs-and-classes/featured/celebrate-democracy/index.jsp">
                                    Celebrate Democracy
                                </a>{" "}
                                w. @torontolibrary’s free programming that encourages engagement &
                                curiosity in voting, democracy & the electoral process. #TOpoli
                                #TOElection #ElectionTO2022 #Toronto
                            </p>
                        </blockquote>

                        <p>
                            <br />
                        </p>

                        <blockquote>
                            <p>
                                Join @torontolibrary on Oct 14 for “Demystifying the Process” an
                                interactive panel discussion that pulls back the curtain on
                                political campaigns and running for office, part of the{" "}
                                <a href="https://www.torontopubliclibrary.ca/programs-and-classes/featured/celebrate-democracy/index.jsp">
                                    Celebrate Democracy
                                </a>{" "}
                                program. Register{" "}
                                <a href="https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMEVT462887&R=EVT462887">
                                    here
                                </a>
                                . #TOpoli #TOElection #ElectionTO2022 #Toronto
                            </p>
                        </blockquote>

                        <p>
                            <br />
                        </p>

                        <blockquote>
                            <p>
                                Join @torontolibrary on Oct 21 for “Toxicity in Elections” an
                                interactive panel discussion that addresses misinformation and the
                                toxicity in politics, part of the{" "}
                                <a href="https://www.torontopubliclibrary.ca/programs-and-classes/featured/celebrate-democracy/index.jsp">
                                    Celebrate Democracy
                                </a>{" "}
                                program. Register{" "}
                                <a href="https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMEVT462345&R=EVT462345">
                                    here
                                </a>
                                . #TOpoli #TOElection #ElectionTO2022 #Toronto
                            </p>
                        </blockquote>

                        <h2 id="toc_8">
                            <br />
                        </h2>

                        <h2 className="share-img-h2" id="toc_9">
                            Shareable Assets
                        </h2>
                        <p>Click on the folder below to jump to the assets.</p>

                        <a
                            href="https://drive.google.com/drive/folders/105YPMB-3fkmh3lLHpPbQ5HDIp7aYCAEn?usp=sharing"
                            target="_blank"
                        >
                            <ShareImg src="https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/website-assets%2FShare_folder%20image.png?alt=media&token=8766d406-c8ce-4ade-8a15-67395d6d3054" />
                            {/* Click here to view and download assets */}
                        </a>

                        {/* <p>
                            <br />
                            <strong>
                                Social media (1200 x 630px) - Facebook, Twitter, LinkedIn
                            </strong>
                        </p>

                        <p>cool pics go here</p>

                        <p>
                            <br />
                            <strong>Email newsletter (1600 x 400px)</strong>
                        </p>

                        <p>cool pics go here</p> */}

                        <h2 id="toc_10"></h2>

                        <h3 id="toc_11">Sources</h3>

                        <p>
                            <a href="https://toronto.ctvnews.ca/toronto-s-municipal-election-candidates-revealed-1.6035456">
                                &quot;Toronto&#39;s municipal election candidates revealed
                            </a>
                            &quot; CTV News - August 20 2022
                        </p>
                    </Container>
                </ThemeContainer>
            </MainContainer>
            <Footer />
            {isModalOpen && <SiteDepartureModal href={href} handleClose={handleModalClose} />}
        </Main>
    );
};

export default SharePage;

const Main = styled.div``;

const Container = styled.div`
    padding: 40px;

    h1 {
        margin-top: 40px;
        margin-bottom: 40px;
        font-size: 38px;
    }

    h2 {
        margin-top: 40px;
        margin-bottom: 40px;
        font-size: 32px;
    }

    .share-img-h2 {
        margin-bottom: 10px;
    }

    h3 {
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 27px;
        font-weight: 600;
    }

    h4 {
        font-size: 23px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    h5 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
    }

    p {
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: 300;
    }

    ul,
    ol {
        margin: 0px 0px 0px 20px;
    }

    li {
        list-style: initial;
        margin: 5px 0;
        font-size: 18px;
        font-weight: 300;
    }
`;

const StarArticle = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
    border: 1px solid grey;
    border-radius: 3px;
`;

const ShareImg = styled.img`
    width: 80%;
    height: 200px;
    object-fit: contain;
`;

const Row = styled.div`
    display: flex;
    margin-bottom: 20px;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const Col = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    align-items: center;
    text-align: center;

    p {
        font-size: 16px;
        height: 60px;
        width: 90%;
    }

    @media (max-width: 900px) {
        margin: 10px 10px;
    }
`;
