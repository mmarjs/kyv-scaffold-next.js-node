import React, { useState } from "react";

import styled from "styled-components";
import { KYVLogoSVG } from "../assets/kyv-logo";

const KidsVoteModal = ({ selectedCandidate, voteForACandidate, handleClose }) => {
    const [success, setSuccess] = useState(false);

    const handleModalClose = () => {
        handleClose();
    };

    const voteForCandidate = () => {
        voteForACandidate(selectedCandidate);
        setSuccess(true);
    };

    return (
        <div className="link-popup-container">
            <Background onClick={handleModalClose} />
            <Main>
                <KYVLogoSVG />
                {success ? (
                    <>
                        <P1>Great! We've registered you vote.</P1>
                        <a onClick={handleModalClose} className="back">
                            Close
                        </a>
                    </>
                ) : (
                    <>
                        <P1>Are you sure you'd like to vote for {selectedCandidate}?</P1>
                        <P2>We recommend you read all the candidates' profiles before you vote.</P2>
                        <Row>
                            <a onClick={handleModalClose} className="back">
                                View other candidates
                            </a>
                            <a onClick={voteForCandidate} className="continue">
                                Yes
                            </a>
                        </Row>
                    </>
                )}
            </Main>
            {/* </Background> */}
        </div>
    );
};

export default KidsVoteModal;

const Background = styled.div`
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Main = styled.div`
    position: fixed;
    z-index: 11;
    top: 15vh;
    left: 30%;
    width: 50%;
    background-color: white;
    border: 2px solid #393535;
    border-radius: 0px 20px 20px 20px;
    max-width: 944px;
    box-shadow: 8px 8px #393535;
    margin-bottom: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 40px;

    @media (max-width: 1040px) {
        border-radius: 0px 10px 10px 10px;
        margin-bottom: 20px;
        box-shadow: 5px 5px #393535;
        width: 70%;
        left: 15%;
    }

    @media (max-width: 600px) {
        width: 90%;
        left: 5%;
        padding: 20px;
    }
`;

const P1 = styled.p`
    color: grey;
    margin: 20px 0;
    font-size: 24px;
`;

const P2 = styled.p`
    color: grey;
    margin: 20px 0;
    margin-bottom: 40px;
    font-size: 18px;
`;

const Row = styled.div`
    display: flex;

    a {
        cursor: pointer;
        text-decoration: underline;
    }
`;
