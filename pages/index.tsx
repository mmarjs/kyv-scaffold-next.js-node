import React from "react";
import styled from "styled-components";
import Head from "next/head";
import WardMap from "../src/components/WardMap";
import Footer from "../src/components/Footer";
import ThemeContainer from "../src/components/ThemeContainer";
import LeftHeaderContainer from "../src/components/LeftHeaderContainer";
import MainContainer from "../src/components/Layout/MainContainer";
import LogoContainer from "../src/components/LogoContainer";
import EventBlock from "../src/components/EventBlock";
import CandidateBlock from "../src/components/CandidateBlock";
import WardSubscription from "../src/components/WardSubscription";

import HeroImage from "../src/components/HeroImage";
import IssuesList from "../src/components/IssuesList";
import Header from "../src/components/Header";

const HomePage = () => {

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
        <LogoContainer />
        {/* <p>Find your ward and view your candidates (and their platforms) for the <b>2022 Toronto Municipal Election on October 24th</b>.</p> */}

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

        <WardSubscription>
          <></>
        </WardSubscription>

        <ThemeContainer
          id="home-browse-wards"
          title="Browse Wards"
          actionLink="/candidates/toronto-mayor"
          actionTitle="See Mayoral Candidates"
        >
          <WardMap />
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
          <CandidateBlock ward="mayoral" />
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



