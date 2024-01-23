import styled from "styled-components";
import { useState, useEffect } from "react";

import Link from "next/link";
import { client } from "../../api";
import { wards } from "../../mock-and-seed-data/wards";

import ThemeContainer from "./ThemeContainer";
import SeeMoreContainer from "./SeeMoreContainer";
import CandidateImage from './CandidateImage';

type Props = {
  ward?: string;
  singleRow?: boolean;
};

const CandidateBlock = ({ ward }: Props) => {
  const [candidates, setCandidates] = useState([]);

  const getCandidates = async () => {
    const tempCandidates = await client.get(ward === "mayoral" ? `/candidates/mayoral` : `/candidates/by-ward/${ward}`);

    const metaArray = [];
    for (let i = 0; i < tempCandidates.data.length; i++) {
      metaArray.push(tempCandidates.data[i]);
    }

    setCandidates(metaArray);
  };

  const getTagOfficialName = (slug) => {
    const tempWard = wards.find((ward) => ward.slug == slug);
    return tempWard?.officialName;
  };

  useEffect(() => {
    getCandidates();
  }, [])

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <div>
      <Container>
        {candidates.map((candidate, index) => {
          return (
            <Link
              key={index}
              href={
                "/candidates/" + candidate?.ward + "?c=" + candidate?.slug + "&active=active"
              }
            >
              <CandidateContainer>
                <Candidate>
                  <ContainerLeft>
                    <CandidateImage name={candidate?.fullname} imageURL={candidate?.profilePhotoUrl}/>
                  </ContainerLeft>
                  <ContainerRight>
                    <C1>{candidate?.fullname}</C1>
                    <CLabel>{getTagOfficialName(candidate.ward)}</CLabel>
                  </ContainerRight>
                </Candidate>
              </CandidateContainer>
            </Link>
          );
        })}
      </Container>
      {/* <SeeMoreContainer to={`/candidates/${ward}`} /> */}
    </div>
  );
};

export default CandidateBlock;

const Container = styled.div`
  display: flex;
  background-color: white;
  /* border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; */
  padding: 10px;
  flex-wrap: wrap;
  flex-direction: row;
`;

const CandidateContainer = styled.div`
  width: 33.333%;
  padding: 20px 10px 10px 10px;
  font-size: 14px;
  justify-content: end;

  &.single-row {
    width: 100%;
  }

  @media (max-width: 1040px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  span {
    margin-top: 10px;
    padding-right: 2px;
  }
`;

const Candidate = styled.div`
  width: 100%;
  display: flex;
  outline: 2px solid grey;
  border-radius: 8px;
  border-top-left-radius: 0;
  cursor: pointer;
  padding: 20px;
`;

const ContainerLeft = styled.div`
  flex: 2;
  position: relative;
  height: auto;
  margin-top: -35px;
`;

const ContainerRight = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 600;
`;

const CImgHolder = styled.div`
  width: 100%;
  height: auto;
  background-color: #0577c8;
  border: 1px solid #393535;
  border-radius: 7px;
  border-top-left-radius: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -35px;

  .circle {
    width: 35px;
    height: 35px;
    background-color: white;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    font-weight: 600;
    text-align: center;
  }
`;

const C1 = styled.p`
  margin-bottom: 0px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const CLabel = styled.p`
  margin: 0;
  font-size: 12px;
  color: white;
  background-color: #6a499e;
  padding: 8px 12px;
  border-radius: 20px;
`;
