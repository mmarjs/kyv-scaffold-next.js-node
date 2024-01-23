import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import HeaderContainer from "../src/components/HeaderContainer";
import MainContainer from "../src/components/Layout/MainContainer";
import HeroImage from "../src/components/HeroImage";
import ThemeContainer from "../src/components/ThemeContainer";

const ContactUs = () => {
  return (
    <Main>
      <Head>
        <title>
          Know Your Vote T.O. 2022 - Toronto Election Education Platform by the Toronto
          Public Library
        </title>
      </Head>
      <Header />

      <HeroImage />

      <MainContainer>
        <HeaderContainer>
          <>Contact Us</>
        </HeaderContainer>

        <ThemeContainer>
          <Container>
            <Contact>
              <h2>General Contact</h2>
              <p>Chris Ellis (he/him)</p>
              <a href="mailto:chris@knowyourvote.to">chris@knowyourvote.to</a>
            </Contact>
            <Contact>
              <h2>Candidates Information Contact</h2>
              <p>Abhimanyu Chaudhary (he/him)</p>
              <a href="mailto:candidat@knowyourvote.to">
                candidate@knowyourvote.to
              </a>
            </Contact>
            <Contact>
              <h2>Events Contact</h2>
              <p>Sarah Yaffe (she/her)</p>
              <a href="mailto:sarah@knowyourvote.to">sarah@knowyourvote.to</a>
            </Contact>
            <Contact>
              <h2>Media Contact</h2>
              <p>Media Contact</p>
              <a href="mailto:media@tpl.ca">media@tpl.ca</a>
            </Contact>
            <Contact>
              <h2>General Project Phoneline:</h2>
              <p>1-833-319-2022 (open 9:00 a.m. to 6:00 p.m.)</p>
            </Contact>
            {/* <Contact>
              <h2>Toronto Public Library Project Lead</h2>
              <p>Alex Carruthers (she/her)</p>
              <p>Manager, Innovation, Learning and Service Planning</p>
              <a href="mailto:acarruthers@tpl.ca">acarruthers@tpl.ca</a>
            </Contact> */}
          </Container>
        </ThemeContainer>
      </MainContainer>
      <Footer />
    </Main>
  );
};

export default ContactUs;

const Main = styled.div``;

const Contact = styled.div`
  margin-bottom: 30px;

  h2 {
    font-size: 20px;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 40px;

  font-size: 16px;
  line-height: 120%;
`;
