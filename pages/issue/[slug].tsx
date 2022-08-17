import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Cookies from "js-cookie";
import Link from "next/link";

import { useRouter } from "next/router";

import { Issues } from "../../mock-and-seed-data/issues";
import { wards } from "../../mock-and-seed-data/wards";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import ThemeContainer from "../../src/components/ThemeContainer";
import MainContainer from "../../src/components/Layout/MainContainer";
import HeroImage from "../../src/components/HeroImage";
import HeaderContainer from "../../src/components/HeaderContainer";
import { client } from "../../api";
import CandidateImage from "../../src/components/CandidateImage";
import IssuesList from "../../src/components/IssuesList";

const IssuePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [issueName, setIssueName] = useState<string>("");
  const [issueShortName, setIssueShortName] = useState<string>("");
  const [issueQuestion, setIssueQuestion] = useState<string>("");
  const [issueDescription, setIssueDescription] = useState<string>("");
  const [wardOrMayoral, setWardOrMayoral] = useState<String>("mayoral");
  const [userWardSelected, setUserWardSelected] = useState<Boolean>(false);
  const [userWard, setUserWard] = useState<String>('');

  const getUserWard = async (cookieId) => {
    const userData = await client.get('/residents/ward-resident/' + cookieId)
    console.log(userData)
    const tempWard = wards.find((ward) => ward.slug == userData.data);
    // setWardName(tempWard?.officialName);
    console.log(tempWard)
    setUserWard(tempWard?.officialName)
    setUserWardSelected(true)
    setWardOrMayoral('ward')
  }

  useEffect(() => {
    const tempIssue = Issues.find((issue) => issue.slug == slug);
    console.log(tempIssue);
    setIssueName(tempIssue?.name);
    setIssueShortName(tempIssue?.shortName);
    setIssueQuestion(tempIssue?.question);
    setIssueDescription(tempIssue?.description);

    // Check if the user's cookie exists
    const localCookie = Cookies.get('kyv-resident-id')
    console.log(localCookie)
    if (localCookie) {
      getUserWard(localCookie)
    } 
  }, [slug]);

  return (
    <Main>
      <Head>
        <title>
          Know Your Vote 2022 - Toronto Election Education Platform by Toronto
          Public Library
        </title>
      </Head>
      <Header />

      <HeroImage />

      <MainContainer>
        <HeaderContainer>{issueShortName}</HeaderContainer>

        <ThemeContainer title="Background Info">
          <div
            className="issue_description"
            dangerouslySetInnerHTML={{ __html: issueDescription }}
          />
        </ThemeContainer>

        <ThemeContainer title="Answers by Candidates for Mayor">
          <>
          <WardSelector>
            {
              userWardSelected ? 
                  <WardBtn onClick={() => setWardOrMayoral('ward')} selected={wardOrMayoral == 'ward'}>
                    <WardHomeIconDiv>
                      <WardHomeIcon src={'/images/home.png'} />
                    </WardHomeIconDiv>
                    <WardText selected={wardOrMayoral == 'ward'}>
                      {userWard}
                    </WardText>
                  </WardBtn>
                : 
                <Link href="/">
                  <WardBtn>
                    <WardHomeIconDiv>
                      <WardHomeIcon src={'/images/home.png'} />
                    </WardHomeIconDiv>
                    <WardText selected={wardOrMayoral == 'ward'}>
                      Find Your Ward
                    </WardText>
                  </WardBtn>
                </Link> 
            }
            <WardBtn selected={wardOrMayoral == 'mayoral'}  onClick={() => setWardOrMayoral('mayoral')}>
              <WardText selected={wardOrMayoral == 'mayoral'}>Mayoral</WardText>
            </WardBtn>
          </WardSelector>

          <CandidateQA>
            <H2>{issueQuestion}</H2>
            <SingleQA>
              <QALeft>
                <CandidateImage name="Mike Layton" />
              </QALeft>
              <QARight>
                <CName>Mike Layton</CName>
                <p>
                  Constructing more affordable housing and dedicating a greater
                  amount of our resources to the repair backlog at Toronto
                  Community Housing. City Council should continue to push the
                  province on making Inclusionary Zoning legislation have the
                  teeth that is needed to require all developers to build
                  purpose-built affordable housing options in their
                  developments. I worked hard with grassroots organizations to
                  have City Council approve a framework that the province sadly
                  fell short of meeting with their tepid legislation.
                </p>
              </QARight>
            </SingleQA>
            <SingleQA>
              <QALeft>
                <CandidateImage name="Marc Cormier" />
              </QALeft>
              <QARight>
                <CName>Marc Cormier</CName>
                <p>
                I have always been a supporter of evidence-based transit
                  planning, and creating the type of road infrastructure that
                  facilitates the movement of people as safely and efficiently
                  as possible, including bike lanes and Vision Zero measures.
                  <br />
                  <br />
                  Transit City was cancelled by the Fords. It left a hole for
                  all residents of Toronto that was never filled. With
                  increasing density and aging road and transit infrastructure,
                  we need to modernize and allocate resources to provide
                  residents with the best possible options to get around.
                </p>
              </QARight>
            </SingleQA>
            <SingleQA>
              <QALeft>
                <CandidateImage name="Joyce Rowlands" />
              </QALeft>
              <QARight>
                <CName>Joyce Rowlands</CName>
                <p>
                The City has approved 8 regressive budgets since 2010. Staff
                  have operated in a culture of needing to ""hold the line"" on
                  spending. In a competitive world with costs increasing, the
                  City and it's services have not been able to keep up, from the
                  TTC, to stormwater management, to the state of our parks; all
                  services are showing signs of strain.
                  <br />
                  <br />I would support additional means of increasing revenues
                  and have in the past (such as polluter fees for industrial
                  corporations, tolls, congestion fees, or stormwater charges).
                </p>
              </QARight>
            </SingleQA>
          </CandidateQA>
          </>
        </ThemeContainer>
        <IssuesList></IssuesList>
      </MainContainer>
      <Footer />
    </Main>
  );
};

export default IssuePage;

const Main = styled.div``;

const H2 = styled.h2`
  margin: 0 0 50px 0px;
  line-height: 120%;
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
`

const WardBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: ${({selected}) => (selected ? '3px solid grey' : 'none')};
  padding: 0 15px;
`

const WardHomeIconDiv = styled.div`
  background-color: #0577C8;
  padding: 10px;
  border-radius: 20px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`

const WardHomeIcon = styled.img`
height: 16px;
width: 16px;
margin-right: 1px;
`

const WardText = styled.p`
  margin: 20px 0;
  font-size: 20px;
  font-weight: ${({selected}) => (selected ? '600' : '400')};
`

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
  line-height: 120%;
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
