import React from 'react'

import styled from 'styled-components'
import Link from 'next/link'

import { Issues } from '../../mock-and-seed-data/issues'
import ThemeContainer from './ThemeContainer';

const IssuesList = () => {
  return (
      <ThemeContainer title="Big Issues" width="full">
        <IssuesContainer>
          {
            Issues.map((issue, index) => {
              return (
                <Link href={"/issue/" + issue.slug} key={index}>
                  <Issue>
                    <IssueImg src={issue.img} />
                    <span>{issue.name}</span>
                  </Issue>
                </Link>
              )
            })
          }
        </IssuesContainer>
      </ThemeContainer>
  )
}

export default IssuesList


const IssuesContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`

const Issue =styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  padding: 10px;

  span {
    width: 100%;
    word-wrap: break-word;
  }

  @media (max-width: 1040px) {
    font-size: 16px;
  }
`

const IssueImg = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 100px;
  margin-bottom: 20px;

  @media (max-width: 1040px) {
    width: 120px;
    height: 120px;
  }
`