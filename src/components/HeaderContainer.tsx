import React, { useState, useContext, useEffect } from "react";

import styled from "styled-components";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "../../pages/_app";
import SaveWardOverlay from "./SaveWardOverlay";

type Props = {
  ward?: boolean;
  children: JSX.Element;
  slug?: string;
  wardName?: string;
};

type userObject = {
  [key: string]: any;
};

const HeaderContainer = ({ children, ward, slug, wardName }: Props) => {
  const [showMakeWardOverlay, setShowMakeWardOverlay] =
    useState<boolean>(false);

  const userContext: userObject = useContext(UserContext);

  const removeWard = () => {
    if (userContext.userEmail) {
      userContext.updateUserWard({
        email: userContext.userEmail,
      });
    } else {
      userContext.updateUserWard({});
    }    
  };

  const toggleSaveWardOverlay = () => {
    if (userContext.userEmail) {
      userContext.updateUserWard({
        email: userContext.userEmail,
        ward: wardName,
      });
    } else {
      if (document.body.style.overflowY === "hidden") {
        document.body.style.overflowY = "auto";
      } else {
        document.body.style.overflowY = "hidden";
      }

      setShowMakeWardOverlay(!showMakeWardOverlay);
    }
  };

  return (
    <Main>
      {showMakeWardOverlay ? (
        <SaveWardOverlay ward={wardName} closeModal={toggleSaveWardOverlay} />
      ) : (
        <></>
      )}
      {children}
      {ward ? (
        <Row>
          {userContext.userWardSelected ? (
            <>
              {userContext.userWardSlug == slug ? (
                <MyWardBtn onClick={removeWard}>
                  <FontAwesomeIcon icon={faHome} />
                  <p>Remove Ward</p>
                </MyWardBtn>
              ) : (
                <WardSelectBtn onClick={toggleSaveWardOverlay}>
                  <FontAwesomeIcon icon={faHome} />
                  <p>Make this my Ward</p>
                </WardSelectBtn>
              )}
            </>
          ) : (
            <WardSelectBtn onClick={toggleSaveWardOverlay}>
              <FontAwesomeIcon icon={faHome} />
              <p>Make this my Ward</p>
            </WardSelectBtn>
          )}
        </Row>
      ) : null}
    </Main>
  );
};

export default HeaderContainer;

const Main = styled.div`
  display: inline-block;
  background-color: white;
  border: 2px solid #393535;
  border-radius: 0px 20px 20px 20px;
  max-width: 1344px;
  box-shadow: 8px 8px #393535;
  margin-top: 85px;
  overflow: hidden;
  padding: 50px 35px;
  margin-bottom: 30px;
  font-size: 60px;
  font-weight: 800;
  /* text-transform: capitalize; */
  text-align: center;
  line-height: 100%;

  @media (max-width: 1040px) {
    border-radius: 0px 10px 10px 10px;
    margin-top: 50px;
    box-shadow: 5px 5px #393535;
    font-size: 40px;
  }

  @media (max-width: 780px) {
    padding: 30px 10px;
    font-size: 40px;
    font-weight: 800;
    width: 100%;
    font-size: 30px;
  }
`;
const Row = styled.div`
  display: flex;
  width: 100%;
`;

const WardSelectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 16px;
  background-color: #a849ca;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  margin-bottom: -22px;
  margin-top: 26px;
  flex-wrap: wrap;

  &.redirect {
    background: #1f2e53;
  }

  @media (max-width: 560px) {
    font-size: 14px;
  }

  svg {
    width: 20px;
    height: 20px;
    color: #fff;

    @media (max-width: 560px) {
      width: 14px;
      height: 14px;
    }
  }

  p {
    color: white;
    margin: 0;
    margin-left: 10px;
  }
`;

const MyWardBtn = styled(WardSelectBtn)`
  background-color: #e95454;
`;
