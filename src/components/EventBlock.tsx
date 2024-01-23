import styled from "styled-components";
import { useState, useEffect } from "react";

import Link from "next/link";
import { client } from "../../api";

import ThemeContainer from "./ThemeContainer";
import SeeMoreContainer from "./SeeMoreContainer";

const EventBlock = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const tempEvents = await client.get("/events");
    setEvents(tempEvents.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <ThemeContainer title="Events" width="full">
      <div>
        <Container>
          {events.map((event, index) => {
            let techDate = new window.Date(event?.dateTime)
              .toString()
              .split(" ");

            return (
              <Link key={index} href={"/events" + "?e=" + event["slug"]}>
                <EventContainer>
                  <Event>
                    <ELeft flex={"1"}>
                      <Month>{techDate[1]}</Month>
                      <Date>{techDate[2]}</Date>
                      <Year>{techDate[3]}</Year>
                    </ELeft>
                    <ContainerRight>
                      <EventName>{event["name"]}</EventName>
                      <EventDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi consequat hendrerit urna semper vulputate. Mauris
                        quis vestibulum urna. Proin eu erat eu ligula
                        pellentesque facilisis.
                      </EventDescription>
                    </ContainerRight>
                  </Event>
                </EventContainer>
              </Link>
            );
          })}
        </Container>

        <SeeMoreContainer to={"/candidates/toronto-mayor"} />
      </div>
    </ThemeContainer>
  );
};

export default EventBlock;

const Container = styled.div`
  display: flex;
  background-color: white;
  padding: 10px;
  flex-wrap: wrap;
  flex-direction: row;
`;

const EventContainer = styled.div`
  width: 50%;
  padding: 10px;
  font-size: 14px;
  justify-content: end;

  @media (max-width: 600px) {
    width: 100%;
  }

  span {
    margin-top: 10px;
    padding-right: 2px;
  }
`;

const Event = styled.div`
  width: 100%;
  display: flex;
  outline: 2px solid grey;
  border-radius: 8px;
  border-top-left-radius: 0;
  cursor: pointer;
  padding: 20px 30px;
  align-items: start;
`;

const ELeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  p {
    margin: 2px 0;
  }
`;

const ContainerRight = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
  font-size: 18px;
`;

const EventName = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`

const EventDescription = styled.div`
  font-weight: 300;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3;
           line-clamp: 3; 
   -webkit-box-orient: vertical;
   font-size: 14px;
   line-height: 120%;
`

const Month = styled.p`
  font-size: 14px;
`;

const Date = styled.p`
  font-size: 28px;
  line-height: 26px;
`;

const Year = styled.p`
`;
