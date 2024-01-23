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
          <>
          How we use website cookies
          </>
        </HeaderContainer>

        <ThemeContainer>
          <Container>
            <p>
            A cookie is a small amount of data, which often includes a unique
            identifier that is sent to your computer or mobile phone or device
            (referred to here as a "device") browser from a website's computer
            and is stored on your device's hard drive. Each website can send its
            own cookie to your browser if your preferences allow it. Many
            websites do this whenever a user visits their website in order to
            track online traffic flows.
            </p>
            <br />
            <p>
            When you visit knowyourvote.to, the pages you see, along with a
            cookie, are downloaded to your device. Many websites do this,
            because cookies enable website managers to do useful things like
            find out whether the device (and probably its user) has accessed the
            website before. This is done on a repeat visit by checking to see,
            and finding, the cookie left there on the last visit.
            </p>
            <br />
            <p>1) Make this my ward:</p>
            <p>
            When a user clicks on "Make this my ward" they are able to
            save the current ward they're in (and optionally provide their email
            address). The person is issued a cookie with a unique id, which is
            used to look up and display "their ward"
            when they return to the site in the future or move between website
            pages. This information is not used for any other purpose and is not
            shared. This information will be securely deleted on November 30,
            2022.
            </p>
            <br />
            <p>2) Google Analytics</p>
            <p>
            Knowyourvote.to uses Google Analytics to gain insight into the way
            the website is used - what content is most popular, what times of
            day people visit the site, what types of computers/web browsers
            visitors are using, etc. Your searches remain confidential and
            anonymous. The project team only uses this information for
            evaluation purposes, to find out which pages users find most useful. 
            This information helps us make better design decisions for the
            website.
            </p>
            <br />
            <p>
            The data retrieved from Google Analytics is aggregated and
            anonymous; we are not able to connect it with any individual user.
            </p>
            <br />
            <p>
            For users who prefer to disable Google Analytics tracking, Google
            provides a browser add-on that automatically prevents any usage
            information from being sent to Google Analytics. The link to this
            add-on is provided below. 
            </p>
            <p><a
              href="https://tools.google.com/dlpage/gaoptout?hl=en"
              target="_blank"
            >
              Google Analytics Opt-out Browser Add-on
            </a></p>
            <br />
            <p>For more information on Google Analytics, please review their <a href="http://www.google.com/intl/en/analytics/privacyoverview.html" target="_blank">
              privacy overview.
            </a></p>
            <br />
            <p>If you feel uncomfortable with our use of cookies, please feel free to
            change your browser settings as it will not affect the function of
            the website.</p>
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

  p {
    margin: 5px 0;
    font-weight: 300;
  }
`;
