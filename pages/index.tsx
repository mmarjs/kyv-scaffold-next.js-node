import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { client } from "../api";
import WardMap from "../src/components/WardMap";
import Footer from "../src/components/Footer";
import SeeMoreContainer from "../src/components/SeeMoreContainer";
import ThemeContainer from "../src/components/ThemeContainer";
import HeaderContainer from "../src/components/HeaderContainer";
import LeftHeaderContainer from "../src/components/LeftHeaderContainer";
import MainContainer from "../src/components/Layout/MainContainer";
import LogoContainer from "../src/components/LogoContainer";
import EventBlock from "../src/components/EventBlock";
import CandidateBlock from "../src/components/CandidateBlock";

import HeroImage from "../src/components/HeroImage";
import IssuesList from "../src/components/IssuesList";
import Header from "../src/components/Header";

const HomePage = () => {
  const [isError, setIsError] = useState<boolean>(false);

  // const [isError, setIsError] = useState<boolean>(false);

  // const setError = (isError) => {
  //   setIsError(isError);
  // }

  return (
    <Main>
      <Head>
        <title>
          Know Your Vote 20222 - Toronto Election Education Platform by Toronto
          Public Library
        </title>
      </Head>
      <Header />

      {/* <KYVBgDotsSVG /> */}
      <HeroImage />

      <MainContainer>
        <HeaderContainer>
          <LogoContainer />
          <TPLLogo className="tpl-project">
            <span>A project by</span>
            <Image src="/images/tpl-logo.png" width="130" height="45"></Image>
          </TPLLogo>
          {/* <p>Find your ward and view your candidates (and their platforms) for the <b>2022 Toronto Municipal Election on October 24th</b>.</p> */}
        </HeaderContainer>

        <LeftHeaderContainer
          title={"Hear from Candidates running in your ward."}
        >
          <p>
            Know Your Vote T.O. is a civic information tool developed by the
            Toronto Public Library. It is not affiliated with the City of
            Toronto's Election Services.
            <br />
            <br />
            To find out who ran to be your City Councillor, enter your address
            in the box below, or use the map to find and click on your part of
            the city. On a mobile device? Tap within the ward's boundaries
            twice.
          </p>
        </LeftHeaderContainer>

        <ThemeContainer
          title="Browse Wards"
          actionLink="/candidates/toronto-mayor"
          actionTitle="See Mayoral Candidates"
        >
          {/* <Row>

          <Link href="/candidates/toronto-mayor">
            <WardSelectBtn><p>See Mayoral Candidates</p></WardSelectBtn>
          </Link>
        </Row> */}
          {/* <WardMap setError={setError} /> */}
          <WardMap />
          {/* <WardSearchContainer>
          <p>Not sure which Ward you're in? Enter your address or postal code to find your Ward:</p>
          <WardSearchInputContainer>
            {isError && <ErrorMessage>Please enter a Toronto address to continue</ErrorMessage>}
            <SearchInput id="geocoder"></SearchInput>
          </WardSearchInputContainer>
        </WardSearchContainer>
      </ThemeContainer>
        </WardSearchContainer> */}
        </ThemeContainer>

        <IssuesList />

        <LeftHeaderContainer title="About the Election.">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            rutrum cras fermentum nam. Dui sed enim risus porttitor massa vel,
            nulla. Dui mauris vestibulum etiam vitae senectus dui hendrerit id
            integer. Tincidunt sed sagittis, donec lorem. Sed ullamcorper metus,
            tincidunt quisque netus senectus. Cras feugiat vitae, sed nibh dui.
          </p>
        </LeftHeaderContainer>

        <ThemeContainer title="Mayoral Candidates">
          <CandidateBlock 
            ward="mayoral"
          />
        </ThemeContainer>

        <EventBlock />
      </MainContainer>

      <Footer />
    </Main>
  );
};

export default HomePage;

const Main = styled.div`

`;
const ErrorMessage = styled.div`
  margin-bottom: 8px;
  color: #f45d5d;
`;
const SearchInput = styled.div``;

const TPLLogo = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: end;
  margin-top: 20px;
  margin-bottom: -40px;

  span {
    margin-top: 10px;
    padding-right: 2px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WardSelectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  background-color: #b456d6;
  border-radius: 12px;
  margin-right: 15px;
  cursor: pointer;

  p {
    color: white;
    margin: 0;
  }
`;
const WardSearchInputContainer = styled.div``;
const WardSearchContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;

  p {
    margin-right: 15px;
  }

  input {
    // font-size: 16px;
    border-radius: 5px;
    border: 1px solid grey;
    // padding: 5px;
    min-width: 400px;
    height: 52px;
    padding: 0 14px;
  }
`;


