import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import { client } from "../api";

import Header from "../src/components/Header";
import MainContainer from "../src/components/Layout/MainContainer";
import KidsBg from "../src/components/KidsBg";
import KidsParentsInfo from "../src/components/KidsParentsInfo";
import Footer from "../src/components/Footer";
import { kidsCandidates } from "../mock-and-seed-data/kidsCandidates";
import KidsVoteModal from "../src/components/KidsVoteModal";

const SharePage = () => {
    // Modal stuff
    const [currentCandidate, setCurrentCandidate] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleVoteModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const voteForACandidate = async (candidate) => {
        console.log(candidate);
        client.post("/kids/post-vote", { candidate });
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

            <KidsBg />

            <MainContainer>
                <HeaderContainer>
                    <H1>Candidates for the Mayorship of Torontoville</H1>
                    <H3>A voting tool for Toronto Public Library Kids</H3>
                </HeaderContainer>

                <Candidates>
                    {kidsCandidates.map((candidate, index) => {
                        return (
                            <Candidate key={index}>
                                <Photo src={candidate.img} />
                                <CandidateCol>
                                    <Name1 color={candidate.pcolor}>{candidate.name}</Name1>

                                    {currentCandidate === index ? (
                                        <SelectedBtn color={candidate.pcolor}>Selected</SelectedBtn>
                                    ) : (
                                        <SelectBtn
                                            onClick={() => setCurrentCandidate(index)}
                                            color={candidate.pcolor}
                                        >
                                            Select
                                        </SelectBtn>
                                    )}
                                </CandidateCol>
                            </Candidate>
                        );
                    })}
                </Candidates>

                <CandidateInfo>
                    <CInfoTop>
                        <SelectedLabel>Selected Candidate</SelectedLabel>

                        <CImgHolder>
                            <CInfoImg src={kidsCandidates[currentCandidate].img} />
                            <Icon src={kidsCandidates[currentCandidate].icon} />
                        </CImgHolder>
                        <Col>
                            <CInfoName color={kidsCandidates[currentCandidate].pcolor}>
                                {kidsCandidates[currentCandidate].name}
                            </CInfoName>
                            <CInfoTagline color={kidsCandidates[currentCandidate].pcolor}>
                                {kidsCandidates[currentCandidate].tagline}
                            </CInfoTagline>
                            <CInfoVoteBtn onClick={handleVoteModalOpen}>
                                Vote for {kidsCandidates[currentCandidate].name}
                            </CInfoVoteBtn>
                        </Col>
                    </CInfoTop>

                    <CInfoBottom>
                        {kidsCandidates[currentCandidate].content.map((item, id) => {
                            return (
                                <Platform key={id}>
                                    <Tag>{item.tag}</Tag>
                                    <Heading>{item.heading}</Heading>
                                    <Text>{item.text}</Text>
                                </Platform>
                            );
                        })}
                    </CInfoBottom>
                </CandidateInfo>

                <KidsParentsInfo />
            </MainContainer>
            <Footer />

            {isModalOpen && (
                <KidsVoteModal
                    selectedCandidate={kidsCandidates[currentCandidate].name}
                    handleClose={handleModalClose}
                    voteForACandidate={voteForACandidate}
                />
            )}
        </Main>
    );
};

export default SharePage;

const Main = styled.div`
    background-color: #a6c927;
    padding-top: 100px;

    @media (max-width: 700px) {
        padding-top: 50px;
    }
`;

const BaseContainer = styled.div`
    background-color: white;
    border: 2px solid #393535;
    border-radius: 0px 20px 20px 20px;
    box-shadow: 8px 8px #393535;
`;

const HeaderContainer = styled(BaseContainer)`
    margin-bottom: 70px;
    padding: 10px 30px;

    @media (max-width: 700px) {
        max-width: 100%;
        padding: 10px 10px;
        margin-bottom: 40px;
    }
`;

const H1 = styled.h1`
    text-align: center;
    font-weight: 600;
    font-size: 38px;
    margin: 20px 30px;
    margin-top: 40px;

    @media (max-width: 700px) {
        font-size: 22px;
        margin: 10px;
    }
`;

const H3 = styled.h3`
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    margin: 20px 30px;
    margin-bottom: 40px;

    @media (max-width: 700px) {
        font-size: 18px;
        margin: 10px;
    }
`;

const Candidates = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const Candidate = styled(BaseContainer)`
    flex: 1;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 10px;

    @media (max-width: 1000px) {
        margin: 0 10px;
        padding: 40px 0px;
    }

    @media (max-width: 700px) {
        margin: 0;
        margin-bottom: 20px;
        flex-direction: row;
        padding: 10px;
        justify-content: flex-start;
    }
`;

const Photo = styled.img`
    width: 70%;

    @media (max-width: 700px) {
        width: 30%;
        margin-left: 20px;
    }
`;

const CandidateCol = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1000px) {
        flex: 1;
    }

    @media (max-width: 700px) {
        flex: 1;
    }
`;

const Name1 = styled.p`
    font-weight: 500;
    margin: 0;
    margin-bottom: 5px;
    font-size: 18px;
    color: ${({ color }) => (color ? color : "grey")};
    display: none;

    @media (max-width: 700px) {
        display: initial;
    }
`;

const SelectedBtn = styled.button`
    background-color: white;
    color: ${({ color }) => (color ? color : "grey")};
    border: ${({ color }) => (color ? "2px solid" + color : "2px solid grey")};
    width: 70%;
    padding: 6px 0;
    border-radius: 30px;
    margin-top: 30px;
    /* margin-bottom: 15px; */

    @media (max-width: 1000px) {
        max-width: 90%;
        padding: 6px 10px;
    }

    @media (max-width: 700px) {
        margin-top: 0px;
        margin-left: 0px;
    }
`;

const SelectBtn = styled.button`
    background-color: ${({ color }) => (color ? color : "grey")};
    color: white;
    border: ${({ color }) => (color ? "2px solid" + color : "2px solid grey")};
    width: 70%;
    padding: 6px 0;
    border-radius: 30px;
    /* margin-bottom: 15px; */
    margin-top: 30px;
    cursor: pointer;

    @media (max-width: 1000px) {
        max-width: 90%;
        padding: 6px 10px;
    }

    @media (max-width: 700px) {
        margin-top: 0px;
        margin-left: 0px;
    }
`;

const CandidateInfo = styled(BaseContainer)`
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

const CInfoTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid grey;
    justify-content: center;
    padding: 20px 0;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const SelectedLabel = styled.p`
    font-size: 14px;
    display: none;

    @media (max-width: 700px) {
        display: initial;
    }
`;

const CImgHolder = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    margin: 30px;
    margin-right: 80px;
`;

const Icon = styled.img`
    position: absolute;
    top: -20px;
    right: -30px;
    width: 65px;
    height: 65px;
    z-index: 2;
`;

const CInfoImg = styled.img`
    position: absolute;
    z-index: 3;
    width: 150px;
    height: 150px;

    @media (max-width: 700px) {
        margin: 20px;
    }
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;

    @media (max-width: 700px) {
        width: 90%;
        align-items: center;
    }
`;

const CInfoName = styled.p`
    font-weight: 600;
    color: ${({ color }) => (color ? color : "grey")};
    font-size: 32px;

    @media (max-width: 700px) {
        text-align: center;
    }
`;

const CInfoTagline = styled.p`
    font-weight: 600;
    margin: 10px 0;
    color: ${({ color }) => (color ? color : "grey")};
    font-size: 22px;

    @media (max-width: 700px) {
        text-align: center;
    }
`;

const CInfoVoteBtn = styled.button`
    border: none;
    background-color: #53a6d8;
    margin-top: 7px;
    color: white;
    border-radius: 30px;
    padding: 12px 30px;
    font-size: 18px;
    cursor: pointer;
`;

const CInfoBottom = styled.div`
    width: 100%;
    padding: 40px 10%;
`;

const Platform = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 700px) {
        align-items: center;
        text-align: center;
    }
`;

const Tag = styled.p`
    background-color: #53a6d8;
    color: white;
    border-radius: 30px;
    padding: 8px 20px;
    font-size: 14px;
`;

const Heading = styled.p`
    font-size: 22px;
    font-weight: 600;
    color: #3f3f3f;
    margin: 20px 0;
`;

const Text = styled.p`
    font-size: 17px;
    font-weight: 400;
    color: #3f3f3f;
`;
