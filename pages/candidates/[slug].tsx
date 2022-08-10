import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import { client } from "../../api";

import { KYVBgDotsSVG } from "../../src/assets/kyv-bg-dots";
import { wards } from "../../mock-and-seed-data/wards";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import MainContainer from "../../src/components/Layout/MainContainer";
import HeroImage from "../../src/components/HeroImage";
import HeaderContainer from "../../src/components/HeaderContainer";
import ThemeContainer from "../../src/components/ThemeContainer";
import LeftHeaderContainer from "../../src/components/LeftHeaderContainer";
import CandidateBlock from "../../src/components/CandidateBlock";
import { url } from "inspector";

const CandidatesPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [wardName, setWardName] = useState<string>("");
  const [selectedCandidate, setSelectedCandidate] = useState(0);
  const [candidates, setCandidates] = useState([]);

  const setSelectedCandidateHelper = (newSelectedCandidate) => {
    // TODO: get candidate responses for the new candidate
    setSelectedCandidate(newSelectedCandidate);
    const tempSelectedCandi = candidates[newSelectedCandidate];
    router.push(
      { pathname: `/candidates/${slug}`, query: { c: tempSelectedCandi.slug } },
      undefined,
      { shallow: true }
    );
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
      if (
        tempCandidates &&
        tempCandidates.data &&
        tempCandidates.data.length > 0
      )
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

  useEffect(() => {
    getCandidates(slug);
    const tempWard = wards.find((ward) => ward.slug == slug);
    setWardName(tempWard?.officialName);
    // setWardNum(temp)
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
        <HeaderContainer>Candidates</HeaderContainer>

        <LeftHeaderContainer title="About Candidates">
          <p>
            These are the Candidates running{" "}
            {slug == "toronto-mayor"
              ? "for the mayor of Toronto"
              : "in your ward of " + wardName}
            . Click through the different candidates to learn more about their
            platforms, browse their social pages, website and more.
          </p>
        </LeftHeaderContainer>

        <ThemeContainerTemp>
          <H2>{slug == "toronto-mayor" ? "Mayoral" : wardName} Candidates</H2>

          {slug == "toronto-mayor" ? (
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
          )}
        </ThemeContainerTemp>

        <CandidatesComponentsContainer>
          <CCCLeft>
            {/* <ThemeContainer title="Candidates" ward={slug == "toronto-mayor" ? "Mayoral" : wardName}> */}
            <ThemeContainer title="Candidates">
              <CandidateList>
                {candidates.map((candidate, index) => {
                  // const tempWard = wards.find(ward => ward.slug == candidate.ward)
                  return (
                    <CandidateContainer>
                      <Candidate
                        onClick={() => setSelectedCandidateHelper(index)}
                        selected={index === selectedCandidate}
                        key={index}
                      >
                        <ContainerLeft>
                          {candidate.img ? (
                            <CImgHolder
                              style={{
                                backgroundImage: `url(${candidate.img})`,
                                backgroundSize: "fill",
                                width: "100%",
                                paddingBottom: "125%",
                              }}
                            >
                            </CImgHolder>
                          ) : (
                            <CImgHolder>
                              <div
                                style={{ width: "100%", paddingBottom: "125%" }}
                              ></div>
                              <div className="circle">
                                <p>
                                  {getCandidateInitials(candidate.fullname)}
                                </p>
                              </div>
                            </CImgHolder>
                          )}
                        </ContainerLeft>
                        <ContainerRight>
                          <C1>{candidate["fullname"]}</C1>
                          <CLabel>{getTagOfficialName(candidate.ward)}</CLabel>
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

          <CCCRight>
            <ThemeContainer>
              <TC3Inner>
                <TC3Left>
                  <TC3Img>
                    <div className="circle">
                      <p>
                        {getCandidateInitials(
                          candidates[selectedCandidate]?.fullname
                        )}
                      </p>
                    </div>
                  </TC3Img>
                </TC3Left>
                <TC3Right>
                  <CTag>
                    {getTagOfficialName(candidates[selectedCandidate]?.ward)}
                  </CTag>
                  <CName>{candidates[selectedCandidate]?.fullname}</CName>
                  <Links>
                    {candidates[selectedCandidate]?.websiteUrl &&
                    candidates[selectedCandidate]?.websiteUrl.length > 0 ? (
                      <LinkItem
                        href={candidates[selectedCandidate]?.websiteUrl}
                      >
                        <LinkIcon src="/images/website.png" />
                        {/* <LinkName>{candidates[selectedCandidate]?.websiteUrl.split('https://')[1]}</LinkName> */}
                      </LinkItem>
                    ) : (
                      <></>
                    )}
                    {candidates[selectedCandidate]?.facebookUrl &&
                    candidates[selectedCandidate]?.facebookUrl.length > 0 ? (
                      <LinkItem
                        href={candidates[selectedCandidate]?.facebookUrl}
                      >
                        <LinkIcon src="/images/facebook.png" />
                        {/* <LinkName>@{candidates[selectedCandidate]?.facebookUrl.split('https://www.facebook.com/')[1]}</LinkName> */}
                      </LinkItem>
                    ) : (
                      <></>
                    )}
                    {candidates[selectedCandidate]?.twitterUrl &&
                    candidates[selectedCandidate]?.twitterUrl.length > 0 ? (
                      <LinkItem
                        href={candidates[selectedCandidate]?.twitterUrl}
                      >
                        <LinkIcon src="/images/twitter.png" />
                        {/* <LinkName>@{candidates[selectedCandidate]?.twitterUrl.split('https://twitter.com/')[1]}</LinkName> */}
                      </LinkItem>
                    ) : (
                      <></>
                    )}
                    {candidates[selectedCandidate]?.instagramUrl &&
                    candidates[selectedCandidate]?.instagramUrl.length > 0 ? (
                      <LinkItem
                        href={candidates[selectedCandidate]?.instagramUrl}
                      >
                        <LinkIcon src="/images/instagram.png" />
                        {/* <LinkName>@{candidates[selectedCandidate]?.instagramUrl.split('https://www.instagram.com/')[1]}</LinkName> */}
                      </LinkItem>
                    ) : (
                      <></>
                    )}
                  </Links>
                </TC3Right>
              </TC3Inner>
            </ThemeContainer>

            <ThemeContainer title={`Q & A by ${candidates[selectedCandidate]?.fullname}`}>
              <div>
                <CandidateQA>
                  <SingleQA>
                    <QALeft>
                      <p>
                        What should the next City Council do about housing in
                        Toronto? Why?
                      </p>
                      <CTag>Housing</CTag>
                    </QALeft>
                    <QARight>
                      <p>
                        Constructing more affordable housing and dedicating a
                        greater amount of our resources to the repair backlog at
                        Toronto Community Housing. City Council should continue
                        to push the province on making Inclusionary Zoning
                        legislation have the teeth that is needed to require all
                        developers to build purpose-built affordable housing
                        options in their developments. I worked hard with
                        grassroots organizations to have City Council approve a
                        framework that the province sadly fell short of meeting
                        with their tepid legislation.
                      </p>
                    </QARight>
                  </SingleQA>
                  <SingleQA>
                    <QALeft>
                      <p>
                        What should the next City Council do about
                        transportation and how we get around Toronto? Why?
                      </p>
                      <CTag>Transportation</CTag>
                    </QALeft>
                    <QARight>
                      <p>
                        I have always been a supporter of evidence-based transit
                        planning, and creating the type of road infrastructure
                        that facilitates the movement of people as safely and
                        efficiently as possible, including bike lanes and Vision
                        Zero measures.
                        <br />
                        <br />
                        Transit City was cancelled by the Fords. It left a hole
                        for all residents of Toronto that was never filled. With
                        increasing density and aging road and transit
                        infrastructure, we need to modernize and allocate
                        resources to provide residents with the best possible
                        options to get around.
                      </p>
                    </QARight>
                  </SingleQA>
                  <SingleQA>
                    <QALeft>
                      <p>
                        Should the next City Council change anything about
                        municipal taxes or city services? Why?
                      </p>
                      <CTag>City Services</CTag>
                    </QALeft>
                    <QARight>
                      <p>
                        The City has approved 8 regressive budgets since 2010.
                        Staff have operated in a culture of needing to ""hold
                        the line"" on spending. In a competitive world with
                        costs increasing, the City and it's services have not
                        been able to keep up, from the TTC, to stormwater
                        management, to the state of our parks; all services are
                        showing signs of strain.
                        <br />
                        <br />I would support additional means of increasing
                        revenues and have in the past (such as polluter fees for
                        industrial corporations, tolls, congestion fees, or
                        stormwater charges).
                      </p>
                    </QARight>
                  </SingleQA>
                </CandidateQA>
              </div>
            </ThemeContainer>
          </CCCRight>
        </CandidatesComponentsContainer>
      </MainContainer>
      <Footer />
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
`;
const CCCRight = styled.div`
  z-index: 1;
  flex: 2;
  display: flex;
  flex-direction: column;
  padding-left: 40px;

  @media (max-width: 1040px) {
    padding-left: 20px;
  }

  @media (max-width: 900px) {
    display: none;
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

const WardSelectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  background-color: #b456d6;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  p {
    color: white;
    margin: 0;
  }
`;

const CandidateList = styled.div`
  background-color: white;
  padding: 10px 0;
  // max-width: 350px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

// const Candidate = styled.div`
//   border: 1px solid grey;
//   margin: 15px;
//   margin-bottom: 25px;
//   padding: 10px;
//   border-radius: 7px;
//   border-top-left-radius: 0;
//   display: flex;
//   background-color: ${({ selected }) =>
//     selected ? "rgba(237, 165, 113, 0.5)" : "white"};
//   cursor: pointer;
// `;

const CLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px;
  padding-top: 10px;
  position: relative;

  p {
    margin: 0;
  }
`;

const CImg = styled.img``;

// const CImgHolder = styled.div`
//   width: 70px;
//   height: 93px;
//   background-color: #0577c8;
//   border: 1px solid #393535;
//   border-radius: 7px;
//   border-top-left-radius: 0;
//   position: absolute;
//   top: -25px;
//   left: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   .circle {
//     width: 35px;
//     height: 34px;
//     background-color: white;
//     border-radius: 40px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   p {
//     font-weight: 600;
//     text-align: center;
//   }
// `;

const CRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 3px;
  padding-bottom: 10px;
`;

const EName = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin: 0;
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

const TC3Inner = styled.div`
  padding: 25px;
  display: flex;
`;

const TC3Left = styled.div`
  /* flex: 2; */
  margin-right: 30px;
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

const LinkName = styled.p`
  margin: 0;
  font-size: 14px;
  margin-left: 10px;
`;

const CandidateQA = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const SingleQA = styled.div`
  display: flex;
  padding: 10px;
`;

const QALeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20px;
  font-size: 18px;

  p {
    text-align: right;
    margin-bottom: 0;
    font-weight: 600;
  }
`;

const QARight = styled.div`
  flex: 2;

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 120%;
  }
`;
