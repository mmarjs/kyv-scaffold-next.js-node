import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import HeaderContainer from "../src/components/HeaderContainer";
import MainContainer from "../src/components/Layout/MainContainer";
import HeroImage from "../src/components/HeroImage";
import ThemeContainer from "../src/components/ThemeContainer";

const AboutPage = () => {
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
        <HeaderContainer>About Know Your Vote T.O.</HeaderContainer>

        <ThemeContainer>
          <Container>
            <h2>What is Know Your Vote T.O.?</h2>
            <p>
              Know Your Vote T.O. is a website where voters can learn about the
              City Council candidates running to represent their neighbourhood
              at Toronto's City Council, learn how candidates think Toronto
              should tackle big issues facing our city, and learn more about the
              city they call home. Four companion events are also being held
              across the city.
            </p>
            <h2>Who created Know Your Vote T.O.?</h2>
            <p>
              Know Your Vote T.O. is a Toronto Public Library project. The
              Library's mission is to preserve and promote universal access to a
              broad range of human knowledge, experience, information, and ideas
              in a welcoming and supportive environment. Access to information
              and the healthy exchange of ideas are fundamental to our
              democracy, which is why the Toronto Public Library is expanding
              how we support engaged citizenship in our city. The TPL has
              developed Know Your Vote T.O. as a new way to further improve
              access to information about candidates running for municipal
              elected office.
            </p>
            <h2>
              How is the Toronto Public Library making sure this website treats
              candidates fairly?
            </h2>
            <p>
              The Library is committed to ensuring that no candidate is given an
              unfair advantage through the Know Your Vote T.O. project. An
              independent external advisory committee reviewed all policies and
              practices to help ensure we achieve this commitment. Our policies
              and practices were designed so that fair and reasonable steps were
              taken to contact and remind all Councillor candidates about the
              opportunity to submit content to Know Your Vote T.O.; that
              questions posed to candidates, as well as other materials posted
              on Know Your Vote T.O., were fair and balanced; and that content
              inclusion policies were appropriate.
              <br />
              <br />
              Our independent External Advisory Committee comprises five notable
              Torontonians who represent diverse sectors, communities, and
              viewpoints.
              <br />
              <br />
              This project is being undertaken following the Use of Library
              Resources During an{" "}
              <a
                href="https://www.torontopubliclibrary.ca/terms-of-use/library-policies/use-of-library-resources-during-an-election.jsp"
                target="_blank"
              >
                Election Period Policy
              </a>.
            </p>
            <h2>How is Know Your Vote T.O. being funded?</h2>
            <p>
              We are undertaking this exciting project thanks to a donation from
              the Toronto Public Library Foundation.
            </p>
            <h2>Why have some candidates not provided answers?</h2>
            <p>
              New submissions from candidates will be uploaded regularly, once
              they have been received, right up to election day, so check back
              again soon. Over the summer, the Know Your Vote T.O. team reached
              out to all registered Councillor candidates through email, phone,
              and/or mailing addresses they provided on publicly-accessible
              Candidate Nomination Forms. Some candidates may have provided
              answers recently, and these will be uploaded shortly, while others
              may have chosen not to submit answers for publication on Know Your
              Vote T.O. Check back regularly to read new responses from
              candidates. Read more about the Candidate Outreach and Content
              Collection Policy.
            </p>
            <h2>How were the questions selected for Know Your Vote T.O.?</h2>
            <p>
              The Know Your Vote T.O. Project Team worked with the independent
              external advisory committee to develop a set of five questions
              that met a series of criteria. The questions were designed to: be
              politically neutral in their framing; be easy to understand for
              both candidates and readers; allow candidates to highlight their
              priorities; relate to issues that are among the most important to
              Torontonians based on recent polling data; relate to issues that
              Toronto's City Council, or Councillors individually, have
              significant power to address; and elicit answers that are
              relatively easy and quick for readers to review.
            </p>
            <h2>
              Are there any limits on what Council candidates have been able to
              submit?
            </h2>
            <p>
              Each question has a 525-character response limit. In addition to
              these five 525-character responses, candidates are allowed to
              share links to their campaign website and to their Facebook,
              Twitter, and LinkedIn accounts. No other web links are permitted,
              and any additional web links included within the candidates'
              responses to questions have been removed. To preserve a welcoming
              and supportive environment, the Library has reserved the right not
              to post a response if the Library reasonably believes that the
              response promotes discrimination or hatred, or contains language
              that is violent, threatening, abusive, or harassing. More
              information is available in the Content Inclusion Policy [link].
            </p>
            <h2>How do you use my address and email on this website?</h2>
            <p>
              Great question! We've created a page that clearly describes the
              answers to the question here and posted our long-form data and
              privacy policy here.
            </p>
            <h2>I've got other questions — can I contact you?</h2>
            <p>
              Yes! Please email us at{" "}
              <a href="mailto:info@knowyourvote.to">info@knowyourvote.to</a> we
              try to answer your questions within a 48-hours or so depending on
              if it is a weekend.
            </p>
          </Container>
        </ThemeContainer>
      </MainContainer>
      <Footer />
    </Main>
  );
};

export default AboutPage;

const Main = styled.div``;

const Container = styled.div`
  padding: 40px;

  h2 {
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
    line-height: 120%;
    font-weight: 300;
  }
`;
