import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";

import { client } from "../api";

import { KYVBgDotsSVG } from "../src/assets/kyv-bg-dots";
import { Issues } from "../mock-and-seed-data/issues";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import EventMap from "../src/components/EventMap";
import MainContainer from "../src/components/Layout/MainContainer";
import HeaderContainer from "../src/components/HeaderContainer";
import HeroImage from "../src/components/HeroImage";
import LeftHeaderContainer from "../src/components/LeftHeaderContainer";
import ThemeContainer from "../src/components/ThemeContainer";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(0);

  const getTagOfficialName = (slug) => {
    const tempIssue = Issues.find((issue) => issue.slug == slug);
    return tempIssue?.shortName;
  };

  const getEvents = async () => {
    const tempEvents = await client.get("/events");
    setEvents(tempEvents.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

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
        <HeaderContainer>Events</HeaderContainer>

        <LeftHeaderContainer title="About Events">
          <p>
            At these events, participants worked together to generate questions
            they thought Torontonians should be asking their Councillor
            candidates. You can see their questions on the Library's blog.
            <br /><br />
            Please note: These events provided Torontonians with the opportunity
            to learn and discuss issues facing their city. Campaigning for or
            against any particular candidate was not allowed and the
            distribution of political material was prohibited. Find out more
            about relevant Library policies here.
          </p>
        </LeftHeaderContainer>

        <EventsComponentsContainer>
          <CCCLeft>
            <ThemeContainer title="Events">
              <EventList>
                {events.map((event, index) => {
                  let techDate = new window.Date(event?.dateTime)
                    .toString()
                    .split(" ");
                  return (
                    <Event
                      selected={index === selectedEvent}
                      key={index}
                      onClick={() => setSelectedEvent(index)}
                    >
                      <ELeft>
                        <Month>{techDate[1]}</Month>
                        <Date>{techDate[2]}</Date>
                        <Year>{techDate[3]}</Year>
                      </ELeft>
                      <ERight>
                        <EName>{event?.name}</EName>
                        {/* <EDescription>{event?.description}</EDescription> */}
                        <Row>
                          {event?.issues.map((issue, index) => {
                            return (
                              <ETag key={index}>
                                {getTagOfficialName(issue)}
                              </ETag>
                            );
                          })}
                        </Row>
                      </ERight>
                    </Event>
                  );
                })}
              </EventList>
            </ThemeContainer>
          </CCCLeft>

          <CCCRight>
            <ThemeContainer3>
              <TC3Inner>
                <Row>
                  {events[selectedEvent]?.issues.map((issue, index) => {
                    return (
                      <ETag2 key={index}>{getTagOfficialName(issue)}</ETag2>
                    );
                  })}
                </Row>
                <CEName>{events[selectedEvent]?.name}</CEName>
                <CEDescription
                  dangerouslySetInnerHTML={{
                    __html: events[selectedEvent]?.description,
                  }}
                />
                <Row>
                  <CEBtn1>Event Details</CEBtn1>
                  <CEBtn2>Share</CEBtn2>
                </Row>
              </TC3Inner>
            </ThemeContainer3>

            <ThemeContainer title="Location">
              <TC4MapDiv>
                <EventMap address={events[selectedEvent]?.address} />
              </TC4MapDiv>
            </ThemeContainer>
          </CCCRight>
        </EventsComponentsContainer>
      </MainContainer>

      <Footer />
    </Main>
  );
};

export default EventsPage;

const Main = styled.div``;

const Row = styled.div`
  display: flex;
`;

const EventsComponentsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const H2 = styled.h2`
  margin: 15px 0;
  margin-left: 15px;
`;

const EventList = styled.div`
  background-color: white;
  padding: 10px 0;
  width: 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const Event = styled.div`
  border: 1px solid grey;
  margin: 15px;
  padding: 10px;
  border-radius: 7px;
  border-top-left-radius: 0;
  display: flex;
  background-color: ${({ selected }) =>
    selected ? "rgba(237, 165, 113, 0.5)" : "white"};
  cursor: pointer;
`;

const ELeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px;
  padding-top: 10px;

  p {
    margin: 0;
  }
`;

const Month = styled.p`
  font-size: 15px;
  margin-top: 3px !important;
  margin-bottom: 0px !important;
`;

const Date = styled.p`
  font-size: 26px;
  margin: 0 !important;
  line-height: 120%;
`;

const Year = styled.p`
  margin-top: 0 !important;
  font-size: 12px;
`;

const ERight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 3px;
  padding-top: 10px;
`;

const EName = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin: 0;
`;

const ETag = styled.p`
  margin: 0;
  margin-top: 5px;
  font-size: 12px;
  color: white;
  background-color: #6a499e;
  padding: 5px 15px;
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

const ETag2 = styled(ETag)`
  font-size: 16px;
`;

const ThemeContainer3 = styled(ThemeContainer)`
  /* flex: 2; */
  margin-left: 15px;
  width: calc(100% - 15px) !important;
`;

const TC3Inner = styled.div`
  padding: 30px 50px;
`;

const ThemeContainer4 = styled(ThemeContainer)`
  /* flex: 2; */
  background-color: #85cdf8;
  margin-left: 15px;
  width: calc(100% - 15px) !important;
`;

const TC4MapDiv = styled.div`
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const CEName = styled.p`
  font-size: 42px;
  line-height: 46px;
  font-weight: 700;
  margin: 30px 0;
`;

const CEDescription = styled.div`
  margin-bottom: 50px;

  p {
    margin: 5px 0;
  }
`;

const CEBtn1 = styled.button`
  padding: 10px 30px;
  font-size: 18px;
  min-width: 180px;
  border: none;
  border-radius: 8px;
  margin-right: 20px;
  background-color: #1f2e53;
  color: white;
  cursor: pointer;
`;

const CEBtn2 = styled.button`
  padding: 10px 30px;
  font-size: 18px;
  min-width: 160px;
  border: none;
  border-radius: 8px;
  background-color: #b456d6;
  color: white;
  cursor: pointer;
`;
