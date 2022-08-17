import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { wards } from "../../mock-and-seed-data/wards";
import { client } from "../../api";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import MainContainer from "../../src/components/Layout/MainContainer";
import HeaderContainer from "../../src/components/HeaderContainer";
import HeroImage from "../../src/components/HeroImage";
import LeftHeaderContainer from "../../src/components/LeftHeaderContainer";
import ThemeContainer from "../../src/components/ThemeContainer";
import CandidateBlock from "../../src/components/CandidateBlock";
import SaveWardOverlay from "../../src/components/SaveWardOverlay";
import WardSubscription from "../../src/components/WardSubscription";
import { UserContext } from "../_app";

type userObject = {
  [key: string]: any;
};

const WardPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [wardName, setWardName] = useState<string>("");
  const [wardNum, setWardNum] = useState<number>(0);
  // const [candidates, setCandidates] = useState([[]]);
  const [showMakeWardOverlay, setShowMakeWardOverlay] = useState(false);

  const userContext: userObject = useContext(UserContext);

  const toggleSaveWardOverlay = () => {
    if (showMakeWardOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    setShowMakeWardOverlay(!showMakeWardOverlay);
  };

  useEffect(() => {
    const tempWard = wards.find((ward) => ward.slug == slug);
    setWardName(tempWard?.officialName);
    setWardNum(tempWard?.number);
  }, [slug]);

  useEffect(() => {
    console.log({ showMakeWardOverlay });
  }, [showMakeWardOverlay]);

  return (
    <Main>
      <Head>
        <title>
          Know Your Vote 2022 - Toronto Election Education Platform by Toronto
          Public Library
        </title>
      </Head>

      {showMakeWardOverlay ? 
        <SaveWardOverlay ward={wardName} closeModal={toggleSaveWardOverlay} />
        : <></>
      }

      <Header />

      <HeroImage />

      <MainContainer>
        <HeaderContainer>{wardName}</HeaderContainer>

        <LeftHeaderContainer
          title={`Current looking at Ward ${wardNum}: ${wardName}`}
        >
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              rutrum cras fermentum nam. Dui sed enim risus porttitor massa vel,
              nulla. Dui mauris vestibulum etiam vitae senectus dui hendrerit id
              integer. Tincidunt sed sagittis, donec lorem. Sed ullamcorper
              metus, tincidunt quisque netus senectus. Cras feugiat vitae, sed
              nibh dui.
            </p>
            <Row>
              {userContext.userWardSelected ? (
                <>
                  {userContext.userWardSlug == slug ? (
                    <MyWardBtn>
                      <FontAwesomeIcon icon={faHome} />
                      <p>My Ward</p>
                    </MyWardBtn>
                  ) : (
                    <Link href={"/ward/" + userContext.userWardSlug}>
                      <WardSelectBtn>
                        <FontAwesomeIcon icon={faHome} />
                        <p>Go to my Ward ({userContext.userWardName})</p>
                      </WardSelectBtn>
                    </Link>
                  )}
                </>
              ) : (
                <WardSelectBtn onClick={toggleSaveWardOverlay}>
                  <FontAwesomeIcon icon={faHome} />
                  <p>Make this my Ward</p>
                </WardSelectBtn>
              )}
            </Row>
          </>
        </LeftHeaderContainer>

        <ThemeContainer title={`${wardName} Candidates`}>
          <CandidateBlock ward={slug.toString()} />
        </ThemeContainer>
      </MainContainer>

      <Footer />
    </Main>
  );
};

export default WardPage;

const Main = styled.div``;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;

  svg {
    width: 18px;
    height 18px;
    color: #393535;
  }
`;

const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

const Row = styled.div`
  display: flex;
`;

const WardSelectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #b456d6;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  svg {
    width: 18px;
    height: 18px;
    color: #fff;
  }

  p {
    color: white;
    margin: 0;
    margin-left: 7px;
  }
`;

const MyWardBtn = styled(WardSelectBtn)`
  background-color: #36953f;
`;
