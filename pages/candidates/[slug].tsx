import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";

import { client } from "../../api";
import { UserContext } from "../../pages/_app";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import * as ga from "../../lib/ga";

// import { KYVBgDotsSVG } from "../../src/assets/kyv-bg-dots";
import { wards } from "../../mock-and-seed-data/wards";
import { Issues } from "../../mock-and-seed-data/issues";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import MainContainer from "../../src/components/Layout/MainContainer";
import HeroImage from "../../src/components/HeroImage";
import HeaderContainer from "../../src/components/HeaderContainer";
import ThemeContainer from "../../src/components/ThemeContainer";
import LeftHeaderContainer from "../../src/components/LeftHeaderContainer";
import SaveWardOverlay from "../../src/components/SaveWardOverlay";
import EmptyState from "../../src/components/EmptyState";
import SiteDepartureModal from "../../src/components/SiteDepartureModal";
// import CandidateBlock from "../../src/components/CandidateBlock";
// import { url } from "inspector";

type userObject = {
    [key: string]: any;
};

const CandidatesPage = () => {
    const router = useRouter();
    const { slug, active } = router.query;
    const [wardName, setWardName] = useState<string>("");
    const [selectedCandidate, setSelectedCandidate] = useState(0);
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showMakeWardOverlay, setShowMakeWardOverlay] = useState(false);
    const [showCandidateDrawer, setShowCandidateDrawer] = useState(false);

    // Modal stuff
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [href, setHref] = useState<string>("");

    const userContext: userObject = useContext(UserContext);

    const handleLinkClick = (e, link) => {
        e.preventDefault();
        setModalOpen(true);
        setHref(link);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const setSelectedCandidateHelper = (newSelectedCandidate) => {
        // TODO: get candidate responses for the new candidate
        setSelectedCandidate(newSelectedCandidate);
        const tempSelectedCandi = candidates[newSelectedCandidate];
        router.push(
            { pathname: `/candidates/${slug}`, query: { c: tempSelectedCandi.slug } },
            undefined,
            { shallow: true }
        );

        toggleDrawer();
    };

    const getTagOfficialName = (slug) => {
        const tempWard = wards.find((ward) => ward.slug == slug);
        return tempWard?.officialName;
    };

    const getCandidateInitials = (fullname) => {
        const nameArray = fullname?.split(" ") || [];
        const initials = [];
        for (var i = 0; i < nameArray.length; i++) {
            initials.push(nameArray[i].charAt(0));
        }

        return initials;
    };

    const toggleDrawer = () => {
        setShowCandidateDrawer(!showCandidateDrawer);
    };

    const getCandidates = async (slug) => {
        const tempCandidates = await client.get("/candidates/by-ward/" + slug);
        const { c } = router.query;
        if (c) {
            tempCandidates.data.find((candidate, idx) => {
                if (candidate.slug === c) {
                    setSelectedCandidate(idx);
                }
            });
        } else {
            if (tempCandidates && tempCandidates.data && tempCandidates.data.length > 0)
                router.push(
                    {
                        pathname: `/candidates/${slug}`,
                        query: { c: tempCandidates.data[0].slug },
                    },
                    undefined,
                    { shallow: true }
                );
        }
        setCandidates(tempCandidates.data);
    };

    const toggleSaveWardOverlay = () => {
        if (userContext.userEmail) {
            userContext.updateUserWard({
                email: userContext.userEmail,
                ward: wardName,
            });
        } else {
            if (document.body.style.overflowY === "hidden") {
                document.body.style.overflowY = "auto";
            } else {
                document.body.style.overflowY = "hidden";
            }

            setShowMakeWardOverlay(!showMakeWardOverlay);
        }
    };

    useEffect(() => {
        (async () => {
            setLoading(true);
            const tempWard = wards.find((ward) => ward.slug == slug);
            setWardName(tempWard?.officialName);
            await getCandidates(slug);
            setLoading(false);
            if (active) {
                setShowCandidateDrawer(true);
            }

            ga.event({
                action: "Candidates-Page-View",
                params: {
                    ward: slug,
                },
            });
        })();
    }, []);

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
                {slug === "toronto-mayor" ? (
                    <meta
                        name="twitter:image"
                        content="https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/sharing-plaques%2FKYV_Social_Plaques_A3-MayorCandidates.png?alt=media&token=541d9ec4-a058-4691-860a-f8e33d41d1a6"
                    />
                ) : (
                    <meta
                        name="twitter:image"
                        content="https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/sharing-plaques%2FKYV_Social_Plaques_A1-WardCandidates.png?alt=media&token=3f6448a9-be6a-4043-91ac-090cd9e41463"
                    />
                )}

                <meta property="og:url" content="https://knowyourvote.to" />
                <meta property="og:site_name" content="Know Your Vote T.O. 2022" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Know Your Vote T.O. 2022" />
                {slug === "toronto-mayor" ? (
                    <meta
                        property="og:image"
                        content="https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/sharing-plaques%2FKYV_Social_Plaques_A3-MayorCandidates.png?alt=media&token=541d9ec4-a058-4691-860a-f8e33d41d1a6"
                    />
                ) : (
                    <meta
                        property="og:image"
                        content="https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/sharing-plaques%2FKYV_Social_Plaques_A1-WardCandidates.png?alt=media&token=3f6448a9-be6a-4043-91ac-090cd9e41463"
                    />
                )}
                <meta
                    property="og:description"
                    content="Toronto Election Education Platform by the Toronto Public Library"
                />
            </Head>

            {showMakeWardOverlay ? (
                <SaveWardOverlay ward={slug} closeModal={toggleSaveWardOverlay} />
            ) : (
                <></>
            )}

            <Header />

            <HeroImage />

            <MainContainer>
                <HeaderContainer>
                    <>Candidates</>
                </HeaderContainer>

                <LeftHeaderContainer title="About Candidates">
                    <p>
                        These are the candidates running{" "}
                        {slug == "toronto-mayor"
                            ? "for the mayor of Toronto"
                            : "in your ward of " + wardName}
                        . Click through the different candidates to learn more about their
                        platforms, browse their social pages, website and more.
                    </p>
                </LeftHeaderContainer>
                {loading ? (
                    <Spinner>
                        <div className="loader" />
                    </Spinner>
                ) : (
                    <>
                        <ThemeContainerTemp>
                            <H2>{slug == "toronto-mayor" ? "Mayoral" : wardName} Candidates</H2>

                            {userContext.userWardSelected && slug !== "toronto-mayor" ? (
                                <Row className="button-container">
                                    {userContext.userWardSlug == slug ? (
                                        <MyWardBtn>
                                            <FontAwesomeIcon icon={faHome} />
                                            <p>My Ward</p>
                                        </MyWardBtn>
                                    ) : (
                                        <>
                                            <WardSelectBtn1 onClick={toggleSaveWardOverlay}>
                                                <MyWardIcon src={"/images/home.png"} />
                                                <p>Make this my Ward</p>
                                            </WardSelectBtn1>
                                            <Link href={"/candidates/" + userContext.userWardSlug}>
                                                <WardSelectBtn>
                                                    <FontAwesomeIcon icon={faHome} />
                                                    <p>Go to {userContext.userWardName}</p>
                                                </WardSelectBtn>
                                            </Link>
                                        </>
                                    )}
                                </Row>
                            ) : (
                                <Row>
                                    <Link href="/">
                                        <WardSelectBtn>
                                            <p>
                                                {slug == "toronto-mayor"
                                                    ? "See Candidates by Ward"
                                                    : "Select a Different Ward"}
                                            </p>
                                        </WardSelectBtn>
                                    </Link>

                                    {slug !== "toronto-mayor" && (
                                        <WardSelectBtn1 onClick={toggleSaveWardOverlay}>
                                            <MyWardIcon src={"/images/home.png"} />
                                            <p>Make this my Ward</p>
                                        </WardSelectBtn1>
                                    )}
                                </Row>
                            )}

                            {/* {slug == "toronto-mayor" ? (
                <Link href="/">
                  <WardSelectBtn>
                    <p>See Candidates by Ward</p>
                  </WardSelectBtn>
                </Link>
              ) : (
                <Link href="/">
                  <WardSelectBtn>
                    <p>Select a different Ward</p>
                  </WardSelectBtn>
                </Link>
              )} */}
                        </ThemeContainerTemp>

                        <CandidatesComponentsContainer>
                            <CCCLeft>
                                {/* <ThemeContainer title="Candidates" ward={slug == "toronto-mayor" ? "Mayoral" : wardName}> */}
                                <ThemeContainer title="Candidates">
                                    <CandidateList>
                                        {candidates.map((candidate, index) => {
                                            return (
                                                <CandidateContainer key={index}>
                                                    <Candidate
                                                        onClick={() => {
                                                            setSelectedCandidateHelper(index);
                                                        }}
                                                        selected={index === selectedCandidate}
                                                        key={index}
                                                    >
                                                        <ContainerLeft>
                                                            {candidate.profilePhotoUrl ? (
                                                                <CImgHolder
                                                                    style={{
                                                                        backgroundImage: `url(${candidate.profilePhotoUrl})`,
                                                                        paddingBottom: "125%",
                                                                    }}
                                                                ></CImgHolder>
                                                            ) : (
                                                                <CImgHolder>
                                                                    <div
                                                                        style={{
                                                                            width: "100%",
                                                                            paddingBottom: "125%",
                                                                        }}
                                                                    ></div>
                                                                    <div className="circle">
                                                                        <p>
                                                                            {getCandidateInitials(
                                                                                candidate.fullname
                                                                            )}
                                                                        </p>
                                                                    </div>
                                                                </CImgHolder>
                                                            )}
                                                        </ContainerLeft>
                                                        <ContainerRight>
                                                            <C1>{candidate["fullname"]}</C1>
                                                            <CLabel>
                                                                {getTagOfficialName(candidate.ward)}
                                                            </CLabel>
                                                        </ContainerRight>
                                                    </Candidate>
                                                </CandidateContainer>
                                            );
                                        })}
                                    </CandidateList>
                                </ThemeContainer>
                            </CCCLeft>

                            {/* <ThemeContainer title="Candidates" width="one">
                <CandidateBlock ward={wardName} singleRow={true}/>
              </ThemeContainer> */}

                            <CCCRight className={showCandidateDrawer ? "active" : ""}>
                                <CCCRightInner>
                                    <IconContainer onClick={toggleDrawer}>
                                        <FontAwesomeIcon icon={faArrowLeft} /> All Candidates
                                    </IconContainer>
                                    <ThemeContainer>
                                        <TC3Inner>
                                            <TC3Left>
                                                {candidates[selectedCandidate]?.profilePhotoUrl ? (
                                                    <CImgHolder
                                                        style={{
                                                            backgroundImage: `url(${candidates[selectedCandidate].profilePhotoUrl})`,
                                                            backgroundSize: "fill",
                                                            width: "100%",
                                                            paddingBottom: "125%",
                                                            marginTop: 0,
                                                        }}
                                                    ></CImgHolder>
                                                ) : (
                                                    <CImgHolder>
                                                        <div
                                                            style={{
                                                                width: "100%",
                                                                paddingBottom: "125%",
                                                                marginTop: 0,
                                                            }}
                                                        ></div>
                                                        <div className="circle">
                                                            <p>
                                                                {getCandidateInitials(
                                                                    candidates[selectedCandidate]
                                                                        ?.fullname
                                                                )}
                                                            </p>
                                                        </div>
                                                    </CImgHolder>
                                                )}
                                            </TC3Left>
                                            <TC3Right>
                                                <CTag>
                                                    {getTagOfficialName(
                                                        candidates[selectedCandidate]?.ward
                                                    )}
                                                </CTag>
                                                <CName>
                                                    {candidates[selectedCandidate]?.fullname}
                                                </CName>
                                                <Links>
                                                    {candidates[selectedCandidate]?.websiteUrl &&
                                                    candidates[selectedCandidate]?.websiteUrl
                                                        .length > 0 ? (
                                                        <LinkItem
                                                            href={
                                                                candidates[selectedCandidate]
                                                                    ?.websiteUrl
                                                            }
                                                            onClick={(e) =>
                                                                handleLinkClick(
                                                                    e,
                                                                    candidates[selectedCandidate]
                                                                        ?.websiteUrl
                                                                )
                                                            }
                                                            // target="_blank"
                                                        >
                                                            <LinkIcon src="/images/website.png" />
                                                        </LinkItem>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    {candidates[selectedCandidate]?.facebookUrl &&
                                                    candidates[selectedCandidate]?.facebookUrl
                                                        .length > 0 ? (
                                                        <LinkItem
                                                            href={
                                                                candidates[selectedCandidate]
                                                                    ?.facebookUrl
                                                            }
                                                            onClick={(e) =>
                                                                handleLinkClick(
                                                                    e,
                                                                    candidates[selectedCandidate]
                                                                        ?.facebookUrl
                                                                )
                                                            }
                                                            // target="_blank"
                                                        >
                                                            <LinkIcon src="/images/facebook.png" />
                                                        </LinkItem>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    {candidates[selectedCandidate]?.twitterUrl &&
                                                    candidates[selectedCandidate]?.twitterUrl
                                                        .length > 0 ? (
                                                        <LinkItem
                                                            href={
                                                                candidates[selectedCandidate]
                                                                    ?.twitterUrl
                                                            }
                                                            onClick={(e) =>
                                                                handleLinkClick(
                                                                    e,
                                                                    candidates[selectedCandidate]
                                                                        ?.twitterUrl
                                                                )
                                                            }
                                                            // target="_blank"
                                                        >
                                                            <LinkIcon src="/images/twitter.png" />
                                                        </LinkItem>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    {candidates[selectedCandidate]?.instagramUrl &&
                                                    candidates[selectedCandidate]?.instagramUrl
                                                        .length > 0 ? (
                                                        <LinkItem
                                                            href={
                                                                candidates[selectedCandidate]
                                                                    ?.instagramUrl
                                                            }
                                                            onClick={(e) =>
                                                                handleLinkClick(
                                                                    e,
                                                                    candidates[selectedCandidate]
                                                                        ?.instagramUrl
                                                                )
                                                            }
                                                            // target="_blank"
                                                        >
                                                            <LinkIcon src="/images/instagram.png" />
                                                        </LinkItem>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    {candidates[selectedCandidate]?.tiktokUrl &&
                                                    candidates[selectedCandidate]?.tiktokUrl
                                                        .length > 0 ? (
                                                        <LinkItem
                                                            href={
                                                                candidates[selectedCandidate]
                                                                    ?.tiktokUrl
                                                            }
                                                            onClick={(e) =>
                                                                handleLinkClick(
                                                                    e,
                                                                    candidates[selectedCandidate]
                                                                        ?.tiktokUrl
                                                                )
                                                            }
                                                            // target="_blank"
                                                        >
                                                            <LinkIcon src="/images/tiktok.png" />
                                                        </LinkItem>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    {candidates[selectedCandidate]?.linkedinUrl &&
                                                    candidates[selectedCandidate]?.linkedinUrl
                                                        .length > 0 ? (
                                                        <LinkItem
                                                            href={
                                                                candidates[selectedCandidate]
                                                                    ?.linkedinUrl
                                                            }
                                                            onClick={(e) =>
                                                                handleLinkClick(
                                                                    e,
                                                                    candidates[selectedCandidate]
                                                                        ?.linkedinUrl
                                                                )
                                                            }
                                                            // target="_blank"
                                                        >
                                                            <LinkIcon src="/images/linkedin.png" />
                                                        </LinkItem>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    {candidates[selectedCandidate]?.publicEmail &&
                                                    candidates[selectedCandidate]?.publicEmail
                                                        .length > 0 ? (
                                                        <LinkItem
                                                            href={
                                                                "mailto:" +
                                                                candidates[selectedCandidate]
                                                                    ?.publicEmail
                                                            }
                                                            target="_blank"
                                                        >
                                                            <LinkIcon src="/images/email.png" />
                                                        </LinkItem>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </Links>
                                                {candidates[selectedCandidate]?.phonePrimary &&
                                                candidates[selectedCandidate]?.phonePrimary.length >
                                                    0 ? (
                                                    <Phone>
                                                        {
                                                            candidates[selectedCandidate]
                                                                ?.phonePrimary
                                                        }
                                                    </Phone>
                                                ) : (
                                                    <></>
                                                )}
                                            </TC3Right>
                                        </TC3Inner>
                                    </ThemeContainer>

                                    <ThemeContainer
                                        title={`Responses by ${candidates[selectedCandidate]?.fullname}`}
                                    >
                                        <div>
                                            <CandidateQA>
                                                {candidates[selectedCandidate]?.issueResponses &&
                                                candidates[selectedCandidate]?.issueResponses
                                                    .length > 0 ? (
                                                    candidates[
                                                        selectedCandidate
                                                    ]?.issueResponses.map((item, index) => {
                                                        const tempIssue = Issues.find(
                                                            (issue) => issue.slug == item.issueSlug
                                                        );

                                                        return (
                                                            <SingleQA key={index}>
                                                                <QALeft>
                                                                    <p>
                                                                        {item.wardSlug ===
                                                                        "toronto-mayor"
                                                                            ? tempIssue.questionMayor
                                                                            : tempIssue.questionCandi}
                                                                    </p>
                                                                    <CTag>{tempIssue.name}</CTag>
                                                                </QALeft>
                                                                <QARight>
                                                                    <p>{item.issueResponse}</p>
                                                                </QARight>
                                                            </SingleQA>
                                                        );
                                                    })
                                                ) : (
                                                    <EmptyState iscandidate={true} />
                                                )}
                                            </CandidateQA>
                                        </div>
                                    </ThemeContainer>
                                </CCCRightInner>
                            </CCCRight>
                        </CandidatesComponentsContainer>
                    </>
                )}
            </MainContainer>
            <Footer />
            {isModalOpen && <SiteDepartureModal href={href} handleClose={handleModalClose} />}
        </Main>
    );
};

export default CandidatesPage;

const Main = styled.div``;

const ThemeContainerTemp = styled.div`
    background-color: white;
    border: 2px solid #393535;
    border-radius: 0px 20px 20px 20px;
    max-width: 1344px;
    box-shadow: 8px 8px #393535;
    margin-bottom: 40px;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;

    @media (max-width: 1040px) {
        border-radius: 0px 10px 10px 10px;
        margin-bottom: 20px;
        box-shadow: 5px 5px #393535;
        flex-direction: column;

        .button-container {
            display: flex;
            flex-direction: column;

            div {
                margin-bottom: 10px;
            }
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const ContainerLeft = styled.div`
    flex: 2;
    position: relative;
    height: auto;
`;

const ContainerRight = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 20px;
    font-size: 16px;
    font-weight: 600;
`;

const CandidateContainer = styled.div`
    width: 100%;
    padding: 20px 10px 10px 10px;
    font-size: 14px;
    justify-content: end;

    span {
        margin-top: 10px;
        padding-right: 2px;
    }
`;

const Candidate = styled.div`
    width: 100%;
    display: flex;
    outline: 2px solid grey;
    border-radius: 8px;
    border-top-left-radius: 0;
    cursor: pointer;
    padding: 20px;
    background-color: ${({ selected }) => (selected ? "#EDA57180" : "white")};
`;

const CImgHolder = styled.div`
    width: 100%;
    height: auto;
    background-color: #0577c8;
    border: 1px solid #393535;
    border-radius: 7px;
    border-top-left-radius: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -35px;
    background-size: cover;

    .circle {
        width: 35px;
        height: 35px;
        background-color: white;
        border-radius: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    p {
        font-weight: 600;
        text-align: center;
    }
`;

const CandidatesComponentsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1344px;
`;
const CCCRight = styled.div`
    z-index: 1;
    flex: 2;
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    transition: left 0.1s ease-out;

    @media (max-width: 1040px) {
        padding-left: 20px;
    }

    @media (max-width: 900px) {
        background: #f5efef;
        z-index: 9;
        position: fixed;
        width: 100vw;
        height: 100vh;
        padding: 20px;
        top: 0;
        left: 100vw;
        background-image: url(${"/images/kyv-dots-bg.png"});
        background-repeat: repeat-x;
        background-position: top center;
        background-size: 35%;

        &.active {
            left: 0;
        }
    }
`;

const CCCRightInner = styled.div`
    overflow-y: scroll;
`;

const IconContainer = styled.div`
    display: none;

    cursor: pointer;
    margin: 10px 0 20px 0;
    background: #fff;
    border: 2px solid #393535;
    border-radius: 0px 10px 10px 10px;
    box-shadow: 5px 5px #393535;
    padding: 14px 18px;
    align-items: center;
    align-self: flex-start;
    font-size: 16px;
    font-weight: 500;

    @media (max-width: 900px) {
        display: flex;
    }

    svg {
        width: 16px;
        height: 16px;
        margin-right: 10px;
    }
`;

const C1 = styled.p`
    margin-bottom: 0px;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
`;

const CLabel = styled.p`
    margin: 0;
    font-size: 12px;
    color: white;
    background-color: #6a499e;
    padding: 8px 12px;
    border-radius: 20px;
`;

const CCCLeft = styled.div`
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 350px;

    @media (max-width: 900px) {
        max-width: 100%;
    }
`;

const H2 = styled.h2`
    margin: 15px 0;
    margin-left: 15px;
`;

const Row = styled.div`
    display: flex;
`;

const WardSelectBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 12px;
    background-color: #1f2e53;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 10px;

    svg {
        width: 18px;
        height: 18px;
        margin-right: 10px;
        color: #fff;
    }

    p {
        color: white;
        margin: 0;
    }
`;

const WardSelectBtn1 = styled(WardSelectBtn)`
    background-color: #a849ca;
`;

const MyWardBtn = styled(WardSelectBtn)`
    background-color: #36953f;
`;

const MyWardIcon = styled.img`
    width: 17px;
    height: 15px;
    margin-right: 8px;
    margin-bottom: 2px;
`;

const CandidateList = styled.div`
    background-color: white;
    padding: 10px 0;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;

    /* height: 100vh; */
    max-height: 970px;
    overflow-y: scroll;

    @media (max-width: 900px) {
        max-width: 100%;
    }
`;

const CTag = styled.div`
    margin: 0;
    margin-top: 5px;
    font-size: 12px;
    color: white;
    background-color: #6a499e;
    padding: 5px 15px;
    border-radius: 20px;
`;

const TC3Inner = styled.div`
    padding: 25px;
    display: flex;
`;

const TC3Left = styled.div`
    margin-right: 30px;
    flex: 1;

    div {
        margin-top: 0;
    }

    .circle {
        width: 75px;
        height: 75px;
    }

    .circle p {
        font-size: 30px;
    }
`;

const TC3Img = styled.div`
    width: 200px;
    height: 280px;
    background-color: #0577c8;
    border: 1px solid #393535;
    border-radius: 12px;
    border-top-left-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .circle {
        width: 115px;
        height: 115px;
        background-color: white;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        font-size: 30px;
        font-weight: 600;
        text-align: center;
    }
`;

const TC3Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    flex: 2;
`;

const CName = styled.p`
    font-size: 32px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 20px;
`;

const Links = styled.div`
    display: flex;
`;

const LinkItem = styled.a`
    display: flex;
    margin-right: 10px;
    cursor: pointer;
    color: #444;
`;

const LinkIcon = styled.img`
    width: 20px;
    height: 20px;
`;

const Phone = styled.p`
    font-size: 16px;
    margin-top: 14px;
`;

const CandidateQA = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 30px 10px;
    border-radius: 20px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

const SingleQA = styled.div`
    display: flex;
    padding: 10px;
    margin-bottom: 24px;

    @media (max-width: 700px) {
        flex-direction: column;
        text-align: center;
    }
`;

const QALeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 20px;
    font-size: 18px;
    width: 100%;

    p {
        text-align: right;
        margin-bottom: 0;
        font-weight: 600;
    }

    @media (max-width: 700px) {
        align-items: center;
        margin-bottom: 10px;

        p {
            text-align: center;
        }
    }
`;

const QARight = styled.div`
    flex: 2;

    p {
        font-size: 16px;
        font-weight: 300;
    }
`;

const Spinner = styled.div`
    .loader {
        border: 10px solid #f3f3f3; /* Light grey */
        border-top: 10px solid #435ead; /* Blue */
        border-radius: 50%;
        width: 100px;
        height: 100px;
        animation: spin 1.3s linear infinite;
        display: block;
        margin: auto;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
