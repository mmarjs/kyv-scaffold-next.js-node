import React from 'react'

import styled from 'styled-components'
import Link from 'next/link'

import { Issues } from '../../mock-and-seed-data/issues'

const EventsBlock = () => {
  return (
      <ThemeContainer2>
        <H2>Big Issues</H2>
        <IssuesContainer>
          {
            Issues.map((issue, index) => {
              return (
                <Link href={"/issue/" + issue.slug} key={index}>
                  <Issue>
                    <IssueImg src={issue.img} />
                    <IssueName>{issue.name}</IssueName>
                  </Issue>
                </Link>
              )
            })
          }
        </IssuesContainer>
      </ThemeContainer2>
  )
}

export default EventsBlock

const ThemeContainer = styled.div`
  z-index: 1;
  background-color: white;
  border: 1px solid grey;
  border-radius: 20px;
  border-top-left-radius: 0;
  box-shadow: 1px 1px 1px solid grey;
  width: ${({ pgWidth }) => (pgWidth ? '80%' : 'initial')};
  max-width: 1100px;
  box-shadow: 8px 8px #000;
  margin-top: 60px;
`

const ThemeContainer2 = styled(ThemeContainer)`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  width: 100%;
  border-top-left-radius: 0;
  background-color: #85CDF8;
`

const H2 = styled.h2`
  margin-left: 20px;
`


const IssuesContainer = styled.div`
  display: flex;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

const Issue =styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const IssueImg = styled.img`
  margin-top: 20px;
  width: 140px;
  height: 140px;
  border-radius: 100px;
`

const IssueName = styled.p`
  text-align: center;
`