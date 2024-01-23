import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { client } from "../../api";

import { useRouter } from "next/router";

import { Issues } from "../../mock-and-seed-data/issues";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import ThemeContainer from "../../src/components/ThemeContainer";
import MainContainer from "../../src/components/Layout/MainContainer";
import HeroImage from "../../src/components/HeroImage";
import HeaderContainer from "../../src/components/HeaderContainer";
import CandidateImage from "../../src/components/CandidateImage";
import IssuesList from "../../src/components/IssuesList";
import EmptyState from "../../src/components/EmptyState";
import FloatingShareButton from "../../src/components/FloatingShareButton";

import { UserContext } from "../../pages/_app";
import * as ga from "../../lib/ga";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

type userObject = {
    [key: string]: any;
};

const IssuePage = () => {
    const router = useRouter();
    const { slug } = router.query; // This SLUG is for the issue only, not for the ward
    const [issueSlug, setIssueSlug] = useState<string>("");
    const [issueName, setIssueName] = useState<string>("");
    const [issueShortName, setIssueShortName] = useState<string>("");
    const [issueQuestionCandi, setIssueQuestionCandi] = useState<string>("");
    const [issueQuestionMayor, setIssueQuestionMayor] = useState<string>("");
    const [issueDescription, setIssueDescription] = useState<string>("");
    const [wardOrMayoral, setWardOrMayoral] = useState<String>("mayoral");
    const [mayoralAnswers, setMayoralAnswers] = useState([]);
    const [wardAnswers, setWardAnswers] = useState([]);

    const userContext: userObject = useContext(UserContext);

    const getMayoralAnswers = async (issueSlug) => {
        const tempMayoralAnswers = await client.get(
            `/issue-responses/by-issue-and-ward?wardSlug=toronto-mayor&issueSlug=` + issueSlug
        );
        console.log(tempMayoralAnswers.data);
        setMayoralAnswers(tempMayoralAnswers.data);
    };

    const getWardAnswers = async (wardSlug, issueSlug) => {
        const tempWardAnswers = await client.get(
            `/issue-responses/by-issue-and-ward?wardSlug=` + wardSlug + `&issueSlug=` + issueSlug
        );
        console.log(tempWardAnswers.data);
        setWardAnswers(tempWardAnswers.data);
    };

    const setWardOrMayoralHelper = (helperInput) => {
        console.log(userContext);
        setWardOrMayoral(helperInput);
        getWardAnswers(userContext?.userWardSlug, issueSlug);
    };

    useEffect(() => {
        const tempIssue = Issues.find((issue) => issue.slug == slug);
        console.log(tempIssue);
        setIssueName(tempIssue?.name);
        setIssueShortName(tempIssue?.shortName);
        setIssueSlug(tempIssue?.slug);
        setIssueQuestionCandi(tempIssue?.questionCandi);
        setIssueQuestionMayor(tempIssue?.questionMayor);
        setIssueDescription(tempIssue?.description);
        getMayoralAnswers(tempIssue?.slug);
        // console.log(userContext)
        // // if (userContext?.userWardName && userContext?.userWardName.length > 0) {
        // //   getWardAnswers(userContext?.userWardName, tempIssue?.slug)
        // // }

        ga.event({
            action: "Issue-Page-View",
            params: {
                ward: slug,
            },
        });
    }, [slug]);

    // const answersArray = [];

    // const renderAnswers = () => {
    //   return answersArray.map((answer, index) => {
    //     return (
    //       <SingleQA key={index}>
    //         <QALeft>
    //           <CandidateImage name={answer.name} />
    //         </QALeft>
    //         <QARight>
    //           <CName>{answer.name}</CName>
    //           <p dangerouslySetInnerHTML={{ __html: answer.answer }} />
    //         </QARight>
    //       </SingleQA>
    //     );
    //   });
    // };

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
                    <>{issueShortName}</>
                </HeaderContainer>

                <ThemeContainer title="Background Info">
                    <Container
                        // className="issue_description"
                        dangerouslySetInnerHTML={{ __html: issueDescription }}
                    />
                </ThemeContainer>

                <ThemeContainer
                    title={
                        "Answers by Candidates for " +
                        (wardOrMayoral === "ward" ? "Councillor" : "Mayor")
                    }
                >
                    <>
                        <WardSelector>
                            {userContext?.userWardName ? (
                                <WardBtn
                                    onClick={() => setWardOrMayoralHelper("ward")}
                                    selected={wardOrMayoral == "ward"}
                                >
                                    <WardHomeIconDiv>
                                        <FontAwesomeIcon icon={faHome} />
                                    </WardHomeIconDiv>
                                    <WardText selected={wardOrMayoral == "ward"}>
                                        {userContext?.userWardName}
                                    </WardText>
                                </WardBtn>
                            ) : (
                                <Link href="/">
                                    <WardBtn>
                                        <WardHomeIconDiv>
                                            <FontAwesomeIcon icon={faHome} />
                                        </WardHomeIconDiv>
                                        <WardText selected={wardOrMayoral == "ward"}>
                                            Find Your Ward
                                        </WardText>
                                    </WardBtn>
                                </Link>
                            )}
                            <WardBtn
                                selected={wardOrMayoral == "mayoral"}
                                onClick={() => setWardOrMayoral("mayoral")}
                            >
                                <WardText selected={wardOrMayoral == "mayoral"}>Mayoral</WardText>
                            </WardBtn>
                        </WardSelector>

                        <CandidateQA>
                            {wardOrMayoral === "mayoral" ? (
                                <>
                                    <Note>
                                        <i>
                                            <a
                                                href="https://www.knowyourvote.to/candidates/toronto-mayor"
                                                target="_blank"
                                            >
                                                See all mayoral candidates.
                                            </a>
                                        </i>
                                    </Note>
                                    <H2>{issueQuestionMayor}</H2>
                                    {mayoralAnswers.length > 0 ? (
                                        mayoralAnswers.map((answer, index) => {
                                            return (
                                                <SingleQA key={index}>
                                                    <QALeft>
                                                        <CandidateImage
                                                            imageURL={
                                                                answer.candidate.profilePhotoUrl
                                                            }
                                                            name={answer.candidate.fullname}
                                                        />
                                                    </QALeft>
                                                    <QARight>
                                                        <CName>{answer.candidate.fullname}</CName>
                                                        <p
                                                            dangerouslySetInnerHTML={{
                                                                __html: answer.issueResponse,
                                                            }}
                                                        />
                                                    </QARight>
                                                </SingleQA>
                                            );
                                        })
                                    ) : (
                                        <EmptyState />
                                    )}
                                </>
                            ) : (
                                <>
                                    <Note>
                                        <i>
                                            Candidates who have submitted a response to a Know Your
                                            Vote T.O. question related to this Big Issue are listed
                                            below in alphabetical order. To see a list of all the
                                            candidates in your ward —{" "}
                                            <a
                                                href={
                                                    "https://www.knowyourvote.to/candidates/" +
                                                    userContext?.userWardSlug
                                                }
                                                target="_blank"
                                            >
                                                please click here
                                            </a>
                                            .
                                        </i>
                                    </Note>
                                    <H2>{issueQuestionCandi}</H2>
                                    {wardAnswers.length > 0 ? (
                                        wardAnswers.map((answer, index) => {
                                            return (
                                                <SingleQA key={index}>
                                                    <QALeft>
                                                        <CandidateImage
                                                            imageURL={
                                                                answer.candidate.profilePhotoUrl
                                                            }
                                                            name={answer.candidate.fullname}
                                                        />
                                                    </QALeft>
                                                    <QARight>
                                                        <CName>{answer.candidate.fullname}</CName>
                                                        <p
                                                            dangerouslySetInnerHTML={{
                                                                __html: answer.issueResponse,
                                                            }}
                                                        />
                                                    </QARight>
                                                </SingleQA>
                                            );
                                        })
                                    ) : (
                                        <EmptyState />
                                    )}
                                </>
                            )}
                        </CandidateQA>
                    </>
                </ThemeContainer>
                <IssuesList></IssuesList>
            </MainContainer>
            <Footer />
            <FloatingShareButton pageName={"this Issue"} />
        </Main>
    );
};

export default IssuePage;

const Main = styled.div``;

const H2 = styled.h2`
    margin: 0 0 50px 0px;
    font-weight: 600;
    width: 100%;

    @media (max-width: 560px) {
        text-align: center;
        margin: 0 0 10px 0;
    }
`;

const WardSelector = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid grey;
`;

const WardBtn = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    border-bottom: ${({ selected }) => (selected ? "3px solid grey" : "none")};
    padding: 0 15px;
`;

const Container = styled.div`
    padding: 60px;

    @media (max-width: 900px) {
        padding: 10px;
    }

    ul,
    ol {
        margin: 20px 0px 20px 20px;
    }

    h2 {
        margin-top: 40px;
        margin-bottom: 40px;
        font-size: 38px;
    }

    h2 {
        margin-top: 40px;
        margin-bottom: 40px;
        font-size: 32px;
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

    ul li {
        list-style: initial;
        margin: 5px 10px;
        font-size: 20px;
        font-weight: 400;
    }

    ol li {
        list-style: auto;
        margin: 15px 10px;
        font-size: 20px;
        font-weight: 400;

        ul li {
            list-style: initial;
        }
    }

    b,
    strong {
        font-weight: 600;
    }

    .footnotes {
        font-size: 18px;
        padding: 20px;
        border-top: 1px solid #ccc;
        margin-top: 40px;
    }

    p {
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 20px;
    }

    sup {
        font-size: 15px;
        margin-left: 2px;
    }

    blockquote {
        padding: 30px 20px;
        border-radius: 0;
        line-height: 120%;
        width: 80%;
        margin: 30px auto;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        li {
            list-style: none;
        }
    }

    table {
        padding: 20px;
        width: 90%;
        margin: auto;
        margin-bottom: 40px;
        font-size: 16px;
    }

    thead {
        border-bottom: 1px solid #ccc;
    }

    tr {
        border-bottom: 1px solid #ccc;
    }

    th {
        padding: 10px;
        font-size: 14px;
        line-height: 120%;
    }

    td {
        padding: 10px;
    }

    @media (max-width: 700px) {
        table {
            display: block;
            overflow-x: scroll;
        }
    }
`;

const WardHomeIconDiv = styled.div`
    background-color: #0577c8;
    border-radius: 20px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;

    @media (max-width: 560px) {
        width: 29px;
        height: 29px;
    }

    svg {
        width: 19px;
        height: 19px;
        color: #fff;

        @media (max-width: 560px) {
            width: 15px;
            height: 15px;
        }
    }
`;

const WardHomeIcon = styled.img`
    height: 16px;
    width: 16px;
    margin-right: 1px;
`;

const WardText = styled.p`
    margin: 20px 0;
    font-size: 20px;
    font-weight: ${({ selected }) => (selected ? "600" : "400")};

    @media (max-width: 560px) {
        font-size: 14px;
    }
`;

const CandidateQA = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 60px;
    width: 100%;
    align-items: center;

    @media (max-width: 560px) {
        padding: 25px;
    }
`;

const Note = styled.p`
    text-align: center;
    font-size: 16px;
    margin-bottom: 30px;
`;

const SingleQA = styled.div`
    margin-bottom: 40px;
    width: 100%;
`;

const QALeft = styled.div`
    margin-right: 12px;
    width: 74px;
    float: left;
    margin-bottom: 6px;

    @media (max-width: 560px) {
        width: 60px;
    }
`;

const CName = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;

    @media (max-width: 560px) {
        margin-bottom: 6px;
    }
`;

const QARight = styled.div`
    font-size: 18px;
    font-weight: 300;
`;

const CTag = styled.p`
    margin: 0;
    margin-top: 5px;
    font-size: 12px;
    color: white;
    background-color: #6a499e;
    padding: 5px 15px;
    border-radius: 20px;
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
