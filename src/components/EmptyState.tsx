import React from "react";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const EmptyState = (iscandidate?) => {
  return (
    <Main>
      {
        iscandidate ?
        <p>This candidate has not responded yet.</p> :
        <p>No answers. Check back for updates!</p>
      }
      <FontAwesomeIcon icon={faComments} />
    </Main>
  );
};

export default EmptyState;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 40px;
    text-align: center;

    @media (max-width: 900px) {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }

  svg {
    width: 240px;
    height: 240px;

    @media (max-width: 900px) {
      height: 140px;
      width: 140px;
    }
  }
`;
