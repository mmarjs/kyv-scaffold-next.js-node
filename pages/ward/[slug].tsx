import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { wards } from "../../mock-and-seed-data/wards";
import { wardData } from "../../mock-and-seed-data/ward-data";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import MainContainer from "../../src/components/Layout/MainContainer";
import HeaderContainer from "../../src/components/HeaderContainer";
import HeroImage from "../../src/components/HeroImage";
import LeftHeaderContainer from "../../src/components/LeftHeaderContainer";
import ThemeContainer from "../../src/components/ThemeContainer";
import CandidateBlock from "../../src/components/CandidateBlock";
import SaveWardOverlay from "../../src/components/SaveWardOverlay";
import WardSubscription from "../../src/components/WardSubscription";
import { UserContext } from "../_app";
import FloatingShareButton from "../../src/components/FloatingShareButton";
import * as ga from "../../lib/ga";

type userObject = {
    [key: string]: any;
};

const WardPage = () => {
    const router = useRouter();
    let { slug } = router.query;
    const [wardName, setWardName] = useState<string>("");
    const [wardNum, setWardNum] = useState<number>(0);
    const [currentWardData, setCurrentWardData] = useState<Array<any>>([]);
    // const [candidates, setCandidates] = useState([[]]);
    const [showMakeWardOverlay, setShowMakeWardOverlay] = useState(false);

    const userContext: userObject = useContext(UserContext);

    function ordinal_suffix_of(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }

    const renderData = () => {
        if (currentWardData.length > 0) {
            return (
                <DataRow>
                    <DataContainer>
                        <DataHeader>2021 Population</DataHeader>
                        <div>
                            <DataValue>{currentWardData[0].population}</DataValue>
                            <DataRank>
                                {ordinal_suffix_of(currentWardData[0]?.sizeRank)} of 25
                            </DataRank>
                        </div>
                    </DataContainer>
                    <DataContainer>
                        <DataHeader>Population growth 2016-2021</DataHeader>
                        <div>
                            <DataValue>{currentWardData[0].populationGrowth2016To2021}%</DataValue>
                            <DataRank>
                                {ordinal_suffix_of(currentWardData[0]?.rankOfGrowth)} of 25
                            </DataRank>
                        </div>
                    </DataContainer>
                    <DataContainer>
                        <DataHeader>Population under 15 years old</DataHeader>
                        <div>
                            <DataValue>{currentWardData[0].under15YearsOld}%</DataValue>
                            <DataRank>
                                {ordinal_suffix_of(currentWardData[0]?.rankUnder15YearsOld)} of 25
                            </DataRank>
                        </div>
                    </DataContainer>
                    <DataContainer>
                        <DataHeader>Population over 64 years old</DataHeader>
                        <div>
                            <DataValue>{currentWardData[0].over64YearsOld}%</DataValue>
                            <DataRank>
                                {ordinal_suffix_of(currentWardData[0].rankOver64YearsOld)} of 25
                            </DataRank>
                        </div>
                    </DataContainer>
                </DataRow>
            );
        }
    };

    useEffect(() => {
        const tempWard = wards.find((ward) => ward.slug == slug);
        setWardName(tempWard?.officialName);
        setWardNum(tempWard?.number);

        ga.event({
            action: "Ward-Page-View",
            params: {
                ward: slug,
            },
        });

        const wardDataObject = wardData.filter((obj) => {
            return obj.name === tempWard?.officialName;
        });

        setCurrentWardData(wardDataObject);
    }, [slug]);

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

            <Header />

            <HeroImage />

            <MainContainer>
                <HeaderContainer ward={true} slug={slug.toString()} wardName={wardName}>
                    <>{wardName}</>
                </HeaderContainer>

                <ThemeContainer
                    title={`Ward ${wardNum}: ${wardName} Data`}
                    // title={null}
                >
                    {renderData()}
                </ThemeContainer>

                <ThemeContainer title={`${wardName} Candidates`}>
                    <CandidateBlock ward={slug.toString()} />
                </ThemeContainer>
            </MainContainer>

            <Footer />
            <FloatingShareButton pageName={"this Ward"} />
        </Main>
    );
};

export default WardPage;

const Main = styled.div``;

const DataRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 20px;
`;

const DataContainer = styled.div`
    display: flex;
    width: 190px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    padding: 20px;

    @media (max-width: 560px) {
        width: 50%;
        padding: 10px;
    }
`;

const DataHeader = styled.div`
    font-size: 14px;
    line-height: 120%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    flex: 1;

    @media (max-width: 560px) {
        font-size: 12px;
    }
`;

const DataValue = styled.div`
    font-size: 40px;
    color: #1f2e53;
    font-weight: 800;
    line-height: 100%;
    margin-bottom: 6px;

    @media (max-width: 560px) {
        font-size: 30px;
    }
`;

const DataRank = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: #666;

    @media (max-width: 560px) {
        font-size: 14px;
    }
`;

const Row = styled.div`
    display: flex;
`;

const WardSelectBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    background-color: #a849ca;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;

    svg {
        width: 18px;
        height: 18px;
        color: #fff;
    }

    p {
        color: white;
        margin: 0;
        margin-left: 7px;
    }
`;

const MyWardBtn = styled(WardSelectBtn)`
    background-color: #36953f;
`;
