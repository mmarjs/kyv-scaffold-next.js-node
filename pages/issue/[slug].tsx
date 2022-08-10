import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import { useRouter } from "next/router";

import { Issues } from "../../mock-and-seed-data/issues";
import { KYVBgDotsSVG } from "../../src/assets/kyv-bg-dots";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import ThemeContainer from "../../src/components/ThemeContainer";
import MainContainer from "../../src/components/Layout/MainContainer";
import HeroImage from "../../src/components/HeroImage";
import HeaderContainer from "../../src/components/HeaderContainer";

const IssuePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [issueName, setIssueName] = useState<string>("");
  const [issueShortName, setIssueShortName] = useState<string>("");
  const [issueQuestion, setIssueQuestion] = useState<string>("");
  const [issueDescription, setIssueDescription] = useState<string>("");

  useEffect(() => {
    const tempIssue = Issues.find((issue) => issue.slug == slug);
    console.log(tempIssue);
    setIssueName(tempIssue?.name);
    setIssueShortName(tempIssue?.shortName);
    setIssueQuestion(tempIssue?.question);
    setIssueDescription(tempIssue?.description);
  }, [slug]);

  return (
    <Main>
      <Head>
        <title>
          Know Your Vote 20222 - Toronto Election Education Platform by Toronto
          Public Library
        </title>
      </Head>
      <Header />

      <HeroImage />

      <MainContainer>
        <HeaderContainer>{slug}</HeaderContainer>

        <ThemeContainer title="Background Info">
          <div className="issue_description" dangerouslySetInnerHTML={{ __html: issueDescription }} />
        </ThemeContainer>

        <ThemeContainer title="Answers by Candidates for Mayor">
          <CandidateQA>
            <H2>{issueQuestion}</H2>
            <SingleQA>
              <QALeft>
                <CName>Mike Layton</CName>
                <CTag>Toronto-Mayoral</CTag>
              </QALeft>
              <QARight>
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
                <CName>Marc Cormier</CName>
                <CTag>Toronto-Mayoral</CTag>
              </QALeft>
              <QARight>
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
                <CName>Joyce Rowlands</CName>
                <CTag>Toronto-Mayoral</CTag>
              </QALeft>
              <QARight>
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
        </ThemeContainer>
      </MainContainer>
      <Footer />
    </Main>
  );
};

export default IssuePage;

const Main = styled.div``;

const H2 = styled.h2`
  margin: 0 0 50px 0;
  line-height: 120%;
  font-weight: 600;

  @media (max-width: 560px) {
    text-align: center;
    margin: 0 0 10px 0;
  }
`;

const CandidateQA = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  @media (max-width: 560px) {
    padding: 25px;
  }
`;

const SingleQA = styled.div`
  display: flex;
  margin-bottom: 40px;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const QALeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20px;
  min-width: 200px;

  @media (max-width: 560px) {
    align-items: center;
    margin-bottom: 20px;
  }

`;

const CName = styled.p`
  text-align: right;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 560px) {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 30px;
  }
`;

const QARight = styled.div`
  flex: 4;

  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 120%;

    @media (max-width: 560px) {
      text-align: center;
    font-size: 16px;
    }
  }
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
