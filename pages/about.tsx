import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import HeaderContainer from "../src/components/HeaderContainer";
import MainContainer from "../src/components/Layout/MainContainer";
import HeroImage from "../src/components/HeroImage";
import ThemeContainer from "../src/components/ThemeContainer";
import SiteDepartureModal from "../src/components/SiteDepartureModal";
import * as ga from "../lib/ga";

const AboutPage = () => {
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
            action: "About-FAQ-Page-View",
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
                    <>Frequently Asked Questions</>
                </HeaderContainer>

                <ThemeContainer>
                    <Container>
                        <h2>What is Know Your Vote T.O.?</h2>
                        <p>Know Your Vote T.O. is a website where voters can learn about:</p>
                        <ul>
                            <li>
                                the mayoral and council candidates running in the municipal election
                                in 2022;
                            </li>
                            <li>
                                how candidates think some of Toronto’s biggest issues should be
                                addressed; and,
                            </li>
                            <li>
                                companion Know Your Vote T.O events and activities (stay tuned).
                            </li>
                        </ul>
                        <br />

                        <h2>Who created Know Your Vote T.O.?</h2>
                        <p>
                            Know Your Vote T.O. is a Toronto Public Library project. The Library’s
                            mission is to preserve and promote universal access to a broad range of
                            human knowledge, experience, information, and ideas in a welcoming and
                            supportive environment. Access to information and the healthy exchange
                            of ideas are fundamental to our democracy, which is why the Toronto
                            Public Library is expanding how it supports engaged citizenship in our
                            city. The TPL has developed Know Your Vote T.O. to further improve
                            access to information about candidates running for municipal elected
                            office.
                        </p>
                        <br />

                        <h2>How is Know Your Vote T.O. being funded?</h2>
                        <p>
                            We are undertaking this exciting project thanks to a donation from the
                            Toronto Public Library Foundation.
                        </p>
                        <br />

                        <h2>
                            How is the Toronto Public Library making sure this website treats
                            candidates fairly?
                        </h2>
                        <p>
                            The Library is committed to ensuring that no candidate is given an
                            unfair advantage through the Know Your Vote T.O. project. An independent
                            External Advisory Committee reviewed all policies and practices to help
                            ensure we achieve this commitment. Know Your Vote T.O.’s policies and
                            practices were designed so that:
                        </p>
                        <ul>
                            <li>
                                fair and reasonable steps were taken to contact and remind all
                                candidates about the opportunity to submit content to Know Your Vote
                                T.O.;{" "}
                            </li>
                            <li>
                                questions posed to candidates, as well as other learning materials
                                posted on Know Your Vote T.O., were reasonable, fair, and balanced;
                                and,{" "}
                            </li>
                            <li>
                                the content inclusion guidelines and procedures for candidates are
                                reasonable.
                            </li>
                        </ul>
                        <p>
                            Our independent External Advisory Committee is comprised of six
                            thoughtful and notable Torontonians representing diverse sectors,
                            communities, and viewpoints.
                        </p>
                        <p>
                            This project is being undertaken following the{" "}
                            <a
                                onClick={handleLinkClick}
                                href={
                                    "https://www.torontopubliclibrary.ca/terms-of-use/library-policies/use-of-library-resources-during-an-election.jsp"
                                }
                                target="_blank"
                            >
                                Use of Library Resources During an Election Period Policy
                            </a>
                            .
                        </p>
                        <br />

                        <h2>Why have some candidates not provided answers?</h2>
                        <p>
                            Starting after the candidate nomination deadline on August 22, 2022 the
                            Know Your Vote T.O. team reached out to all registered candidates
                            through email, phone, and/or mailing addresses they provided on
                            publicly-accessible Nomination Forms. Some candidates may have provided
                            answers recently, while others may have chosen not to submit answers for
                            publication at all. Check back regularly to read new responses from
                            candidates.
                        </p>
                        <p>
                            <i>
                                <a
                                    href={
                                        "https://docs.google.com/document/d/1HHNGglM7NyPo2GSshK0ER1-1MfkCkNp6pYkSB5-8vqo/edit"
                                    }
                                    target="_blank"
                                >
                                    Read more about the Candidate Outreach and Content Collection
                                    Policy.
                                </a>
                            </i>
                        </p>
                        <br />

                        <h2>How were the questions selected for Know Your Vote T.O.?</h2>
                        <p>
                            The Know Your Vote T.O. Project Team worked with the independent
                            External Advisory Committee to develop a set of six questions that met a
                            series of criteria. The questions were designed to: be politically
                            neutral in their framing; be easy to understand for both candidates and
                            readers; allow candidates to highlight their priorities; relate to
                            issues that are among the most important to Torontonians based on recent
                            polling data; relate to issues that Toronto’s City Council, or
                            Councillors individually, have significant power to address; and elicit
                            answers that are relatively easy and quick for readers to review.
                        </p>
                        <br />

                        <h2>
                            Are there any limits on what Council candidates have been able to
                            submit?
                        </h2>
                        <p>Candidates can submit:</p>
                        <ol>
                            <li>
                                550-character with spaces (or about 75 word) responses to the six
                                Know Your Vote questions;
                            </li>
                            <li>
                                a link to a campaign website, social media links, and an email. No
                                other web links are permitted, and any additional web links included
                                within the candidates’ responses to questions will be removed;
                            </li>
                            <li>A close cropped profile picture.</li>
                        </ol>
                        <br />

                        <h2>Are there any other considerations for what candidates can submit?</h2>
                        <p>
                            To preserve a welcoming and supportive environment, the Library has
                            reserved the right not to post a response if it reasonably believes that
                            the response promotes discrimination or hatred or contains language that
                            is violent, threatening, abusive, or harassing. The goal is to not have
                            to intervene as much as possible and let the candidates' submissions
                            represent themselves.{" "}
                        </p>
                        <p>
                            <i>
                                More information is available in the{" "}
                                <a
                                    href={
                                        "https://docs.google.com/document/d/1HHNGglM7NyPo2GSshK0ER1-1MfkCkNp6pYkSB5-8vqo/edit?usp=sharing"
                                    }
                                    target="_blank"
                                >
                                    Content Inclusion Policy
                                </a>
                                .
                            </i>
                        </p>
                        <br />

                        <h2>What if I think something violates this policy?</h2>
                        <p>
                            Please send an email to{" "}
                            <a href="mailto:candidate@knowyourvote.to">candidate@knowyourvote.to</a>{" "}
                            or give us a call at ​​1-833-319-2022 if you don’t use email. We will
                            consider what you think violates this policy, document this, consult our
                            policy and take action accordingly.
                        </p>
                        <br />

                        <h2>
                            Do you check the grammar and spelling of the candidates’ submissions?
                        </h2>
                        <p>
                            The short answer is — no. Again, The goal is to not have to intervene as
                            much as possible and let the candidates' submissions represent
                            themselves.
                        </p>
                        <br />

                        <h2>
                            I am a candidate (or representative of one), and I’ve not received an
                            email, phone, or mailed invitation to submit Know Your Vote T.O. content
                            — how can I get some help?
                        </h2>
                        <p>
                            Please send an email to{" "}
                            <a href="mailto:candidate@knowyourvote.to">candidate@knowyourvote.to</a>{" "}
                            or give us a call at ​​1-833-319-2022 if you don’t use email. Note: we
                            will have to verify you as a candidate.{" "}
                        </p>
                        <br />

                        <h2>How do you use my address and email on this website?</h2>
                        <p>
                            Great question! Check out our{" "}
                            <a href="https://www.knowyourvote.to/data-policy">
                                how we use your information
                            </a>{" "}
                            page which explains (in reasonable language) what visitor information we
                            use and how we use it.
                        </p>
                        <br />

                        <h2>I've got other questions — can I contact you? </h2>
                        <p>
                            Yes! Please email us at{" "}
                            <a href="mailto:info@knowyourvote.to">info@knowyourvote.to</a>. We try
                            to answer your questions within 48-hours or so depending on if it is a
                            weekend.
                        </p>
                        <br />

                        {/* <h2>How do you use my address and email on this website?</h2>
            <p>
              Great question! We've created a page that clearly describes the
              answers to the question here and posted our long-form data and
              privacy policy here.
            </p>
            <h2>I've got other questions — can I contact you?</h2>
            <p>
              Yes! Please email us at{" "}
              <a href="mailto:info@knowyourvote.to">info@knowyourvote.to</a> we
              try to answer your questions within a 48-hours or so depending on
              if it is a weekend.
            </p> */}
                    </Container>
                </ThemeContainer>
            </MainContainer>
            <Footer />
            {isModalOpen && <SiteDepartureModal href={href} handleClose={handleModalClose} />}
        </Main>
    );
};

export default AboutPage;

const Main = styled.div``;

const Container = styled.div`
    padding: 40px;

    h2 {
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
