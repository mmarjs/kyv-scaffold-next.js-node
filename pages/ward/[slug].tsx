import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import { KYVBgDotsSVG } from "../../src/assets/kyv-bg-dots";
import { wards } from "../../mock-and-seed-data/wards";
import { client } from "../../api";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import SeeMoreContainer from "../../src/components/SeeMoreContainer";
import MainContainer from "../../src/components/Layout/MainContainer";
import HeaderContainer from "../../src/components/HeaderContainer";
import HeroImage from "../../src/components/HeroImage";
import LeftHeaderContainer from "../../src/components/LeftHeaderContainer";
import ThemeContainer from "../../src/components/ThemeContainer";
import CandidateBlock from "../../src/components/CandidateBlock";
import SaveWardOverlay from '../../src/components/SaveWardOverlay';

const WardPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [wardName, setWardName] = useState<string>("");
  const [wardNum, setWardNum] = useState<number>(0);
  const [candidates, setCandidates] = useState([[]]);
  const [showMakeWardOverlay, setShowMakeWardOverlay] = useState(false)

  const getCandidatesByWard = async (slug) => {
    const tempCandidates = await client.get("/candidates/by-ward/" + slug);
    // setCandidates(tempCandidates.data)

    const chunkSize = 3;
    const metaArray = [];
    for (let i = 0; i < tempCandidates.data.length; i += chunkSize) {
      const chunk = tempCandidates.data.slice(i, i + chunkSize);
      metaArray.push(chunk);
    }

    console.log(metaArray);
    setCandidates(metaArray);
  };

  const getCandidateInitials = (fullname) => {
    const nameArray = fullname?.split(" ") || [];
    const initials = [];
    for (var i = 0; i < nameArray.length; i++) {
      initials.push(nameArray[i].charAt(0));
    }

    return initials;
  };

  useEffect(() => {
    getCandidatesByWard(slug);
    const tempWard = wards.find((ward) => ward.slug == slug);
    setWardName(tempWard?.officialName);
    setWardNum(tempWard?.number);
  }, [slug]);

  console.log("slug", slug)

  return (
    <Main>
      <Head>
        <title>
          Know Your Vote 20222 - Toronto Election Education Platform by Toronto
          Public Library
        </title>
      </Head>

      {
        showMakeWardOverlay ? 
        <SaveWardOverlay ward={slug} closeModal={setShowMakeWardOverlay} />
        : <></>
      }

      <Header />

      <HeroImage />

      <MainContainer>
        <HeaderContainer>{wardName}</HeaderContainer>
      

      <LeftHeaderContainer
        title={`Current looking at Ward ${wardNum}: ${wardName}`}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          rutrum cras fermentum nam. Dui sed enim risus porttitor massa vel,
          nulla. Dui mauris vestibulum etiam vitae senectus dui hendrerit id
          integer. Tincidunt sed sagittis, donec lorem. Sed ullamcorper metus,
          tincidunt quisque netus senectus. Cras feugiat vitae, sed nibh dui.
        </p>
        <WardSelectBtn onClick={() => setShowMakeWardOverlay(true)}>
          <img src={"/images/home.png"} />
          <p>Make this my Ward</p>
        </WardSelectBtn>
      </LeftHeaderContainer>

      {/* <ThemeContainer3>
        <TCLeft>
          <Info1>Currently looking at</Info1>
          <Info1>
            Ward {wardNum}: {wardName}
          </Info1>
          <WardSelectBtn>
            <img src={"/images/home.png"} />
            <p>Make this my Ward</p>
          </WardSelectBtn>
        </TCLeft>
        <TCRight>
          <Info2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            rutrum cras fermentum nam. Dui sed enim risus porttitor massa vel,
            nulla. Dui mauris vestibulum etiam vitae senectus dui hendrerit id
            integer. Tincidunt sed sagittis, donec lorem. Sed ullamcorper metus,
            tincidunt quisque netus senectus. Cras feugiat vitae, sed nibh dui.
          </Info2>
        </TCRight>
      </ThemeContainer3> */}

      <ThemeContainer title={`${wardName} Candidates`}>
          {/* <ContainerInner>
            {candidates.map((candidateRow, index) => {
              return (
                <CandidateRow key={index}>
                  {candidateRow.map((candidate, index2) => {
                    return (
                      <Link
                        href={"/candidates/" + slug + "?c=" + candidate.slug}
                        key={index2}
                      >
                        <Candidate>
                          <CandidateLeft>
                            <CImgHolder>
                              <div className="circle">
                                <p>
                                  {getCandidateInitials(candidate.fullname)}
                                </p>
                              </div>
                            </CImgHolder>

                            <CandidateImg src={'https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/Screen%20Shot%202022-07-22%20at%2010.43.15%20AM.png?alt=media&token=deefe474-91fc-4af6-90a7-4750a0155aed'} />
                          </CandidateLeft>
                          <CandidateRight>
                            <C1>{candidate.fullname}</C1>
                            <CLabel>{wardName}</CLabel>
                          </CandidateRight>
                        </Candidate>
                      </Link>
                    );
                  })}
                </CandidateRow>
              );
            })}
          </ContainerInner> */}

          <CandidateBlock ward={slug.toString()} />
      </ThemeContainer>
      </MainContainer>

      <Footer />
    </Main>
  );
};

export default WardPage;

const Main = styled.div``;

// const ThemeContainer = styled.div`
//   z-index: 1;
//   background-color: white;
//   border: 1px solid grey;
//   border-radius: 20px;
//   box-shadow: 1px 1px 1px solid grey;
//   width: ${({ pgWidth }) => (pgWidth ? "80%" : "initial")};
//   max-width: 896px;
//   box-shadow: 8px 8px #000;
//   margin-top: 60px;
// `;

// const ThemeContainer1 = styled(ThemeContainer)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* width: 100%; */
//   padding: 10px 50px;

//   svg {
//     width: 80%;
//     max-width: 460px;
//     max-height: 70px;
//     margin: 20px 10px;
//   }
// `;

// const ThemeContainer2 = styled(ThemeContainer)`
//   display: flex;
//   flex-direction: column;
//   /* align-items: center; */

//   width: 100%;
//   border-top-left-radius: 0;
//   background-color: #85cdf8;
// `;

// const ThemeContainer3 = styled(ThemeContainer)`
//   /* padding: 20px; */
//   display: flex;
//   width: 100%;
// `;

const TCLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  padding-right: 0;
`;

const TCRight = styled.div`
  flex: 3;
  margin-left: 15px;
  padding: 20px;
  padding-left: 0;
`;

const Info1 = styled.p`
  text-align: right;
  font-weight: bold;
  margin: 0;
`;

const WardSelectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  background-color: #b456d6;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 16px;

  img {
    width: 18px;
    height: 18px;
  }

  p {
    color: white;
    margin: 0;
    margin-left: 7px;
  }
`;

const Info2 = styled.p`
  margin: 0;
`;

const H1 = styled.h1``;

const H2 = styled.h2`
  margin-left: 20px;
`;

const ContainerInner = styled.div`
  /* display: flex; */
  background-color: white;
  /* border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; */
  padding: 10px;
`;

const CandidateRow = styled.div`
  display: flex;
  margin: 10px 0;
`;

const Candidate = styled.div`
  /* flex: 1; */
  width: calc(33.3% - 23px);
  display: flex;
  margin: 10px;
  border: 2px solid grey;
  border-radius: 8px;
  border-top-left-radius: 0;
  cursor: pointer;
`;

const CandidateLeft = styled.div`
  flex: 2;
  position: relative;
  height: 100px;
`;

const CImgHolder = styled.div`
  width: 75%;
  height: 93px;
  background-color: #0577c8;
  border: 1px solid #393535;
  border-radius: 7px;
  border-top-left-radius: 0;
  position: absolute;
  top: -15px;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  .circle {
    width: 35px;
    height: 34px;
    background-color: white;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-weight: 600;
    text-align: center;
  }
`;

const CandidateImg = styled.img`
  width: 100%;
  border: 2px solid grey;
  position: absolute;
  top: -10px;
  right: 10px;
  width: 80px;
  height: 100px;
  border-radius: 8px;
  border-top-left-radius: 0;
  object-fit: cover;
`;

const CandidateRight = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const C1 = styled.p`
  margin-bottom: 0px;
  font-size: 16px;
`;

const CLabel = styled.p`
  margin: 0;
  margin-top: 5px;
  font-size: 12px;
  color: white;
  background-color: #6a499e;
  padding: 5px 10px;
  border-radius: 20px;
`;

// const MockImg = styled.img``
