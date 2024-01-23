import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import HeaderContainer from "../src/components/HeaderContainer";
import MainContainer from "../src/components/Layout/MainContainer";
import HeroImage from "../src/components/HeroImage";
import ThemeContainer from "../src/components/ThemeContainer";

const DataPolicyPage = () => {
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
          <>How we use your information</>
        </HeaderContainer>

        <ThemeContainer>
          <Container>
            <ol>
              <li>
                We employ Google Analytics to better understand how you
                discovered and how you use knowyourvote.to. The information
                collected can help the project team determine which website
                design choices worked or did not work, and what marketing and
                promotion strategies were more effective than others. Overall,
                this helps the project team make a better website and understand
                the project's success level.{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                >
                  Click here
                </a>{" "}
                to learn more about Google Analytics's data and privacy policy.
              </li>
              <li>
                Address information is used (see the ward search box) to
                determine what ward you will vote in. When you type your address
                in the ward search box, this information is securely sent to{" "}
                <a href="https://www.mapbox.com" target="_blank">
                  Mapbox.com
                </a>
                , which then sends the correct ward associated with that address
                back to knowyourvote.to so you can see the candidates who are
                running in your ward. You can also click on your ward if you
                don't want to type in your address. This helps users of 
                knowyourvote.to quickly find which ward they live and vote in.{" "}
                <a
                  href="https://www.mapbox.com/legal/privacy#:~:text=For%20purposes%20of%20the%20CCPA,are%20not%20our%20service%20providers."
                  target="_blank"
                >
                  Click here
                </a>{" "}
                to learn more about Mapbox's data and privacy policy.
              </li>
              <li>
                Email addresses and preferences are used to send users the
                project information that they've expressed interest in
                receiving. When you type your email in the email sign-up box and
                select your preferences, this information is securely sent to{" "}
                <a href="http://sendinblue.com" target="_blank">
                  SendInBlue.com
                </a>{" "}
                , which securely stores your email and preferences. The project
                team also uses SendinBlue.com to email those users. When you
                sign up to receive emails, you will receive a request for
                confirmation you want to receive them, and it is also easy for
                users to indicate if they do not wish to receive emails anymore.
                Overall, this helps the project team efficiently send email
                communications to the people who sign up to receive them, and
                helps users easily manage their preferences related to these
                emails.{" "}
                <a
                  href="https://www.sendinblue.com/legal/privacypolicy/"
                  target={"_blank"}
                >
                  Click here
                </a>{" "}
                to learn more about SendinBlue's data and privacy policy.
              </li>
              <li>
                A{" "}
                <a href="https://www.mongodb.com/" target="_blank">
                  MongoDB
                </a>{" "}
                database is used to host all the information on our website and
                support its functions. For example, the database stores the text
                you are reading right now. It also helps route information to
                and from some of the above services. When you type your email
                into the email sign-up box, it is routed to MongoDB as our main
                datastore and sent to SendinBlue.com, our emailing tool. Using
                databases in this way is typical of almost every website you
                visit.{" "}
                <a
                  href="https://www.mongodb.com/legal/privacy-policy#:~:text=We%20collect%20Personal%20Data%20and,other%20events%20hosted%20by%20us."
                  target="_blank"
                >
                  Click here
                </a>{" "}
                to learn more about MongoDB's data and privacy policy.
              </li>
            </ol>
            <p>
              All of the tools and services we use are carefully chosen to
              protect knowyourvote.to's users. We ask for as little information
              from you as possible while still ensuring that your experience is
              a good one and that the overall project is a success. We've also
              created ways for you to use the website without providing your
              email address or your physical address.{" "}
            </p>
            <p>
              Have questions? Email us at{" "}
              <a href="mailto:info@knowyourvote.to">info@knowyourvote.to</a> or
              call us at 1-833-319-2022.{" "}
            </p>
            <p>
              To review the long-form data protection and privacy policy for
              knowyourvote.to please{" "}
              <a
                href="https://docs.google.com/document/d/1K00pBHwIxsJ9fYgtmPMcT8sVQJ4dLdJjCiEPTjKbNUE/edit?usp=sharing"
                target="_blank"
              >
                click here
              </a>
              .
            </p>
          </Container>
        </ThemeContainer>
      </MainContainer>
      <Footer />
    </Main>
  );
};

export default DataPolicyPage;

const Main = styled.div``;

const Container = styled.div`
  padding: 40px;

  ul,
  ol {
    margin: 20px 0px 20px 20px;
  }

  li {
    list-style: initial;
    margin: 15px 0;
    font-size: 18px;
    font-weight: 300;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 20px;
  }
`;
